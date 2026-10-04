from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import os

app = FastAPI(title="AuraStream API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictionInput(BaseModel):
    danceability: float
    energy: float
    loudness: float
    tempo: float
    duration_minutes: float
    upbeat_score: float
    popularity: float
    artist_track_count: float

def get_artifacts_path():
    return os.path.join(os.path.dirname(__file__), "model_artifacts.joblib")

@app.get("/api/metrics")
def get_metrics():
    path = get_artifacts_path()
    if not os.path.exists(path):
        raise HTTPException(status_code=500, detail="model_artifacts.joblib not found. Run train_model.py first.")
    artifacts = joblib.load(path)
    return {
        "metrics": artifacts["metrics"],
        "champion_model": artifacts["best_model_name"]
    }

@app.post("/api/predict")
def predict_streams(payload: PredictionInput):
    path = get_artifacts_path()
    if not os.path.exists(path):
        raise HTTPException(status_code=500, detail="model_artifacts.joblib not found.")

    artifacts = joblib.load(path)
    model = artifacts["model"]
    scaler = artifacts["scaler"]

    raw_features = np.array([[
        payload.danceability,
        payload.energy,
        payload.loudness,
        payload.tempo,
        payload.duration_minutes,
        payload.upbeat_score,
        payload.popularity,
        payload.artist_track_count
    ]])

    scaled_features = scaler.transform(raw_features)
    log_pred = float(model.predict(scaled_features)[0])
    predicted_streams = int(np.expm1(log_pred))

    if predicted_streams > 1000000:
        tier = "Blockbuster Platinum"
    elif predicted_streams > 100000:
        tier = "Gold Streamer"
    elif predicted_streams > 10000:
        tier = "Moderate Release"
    else:
        tier = "Emerging Track"

    return {
        "predicted_log_streams": round(log_pred, 4),
        "predicted_total_streams": predicted_streams,
        "performance_tier": tier
    }