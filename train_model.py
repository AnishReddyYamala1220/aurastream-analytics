import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import joblib
import os

def build_and_save_artifacts():
    # 1. Load Spotify Dataset
    dataset_path = 'spotify_artist_streaming_2020_2025.csv'
    if not os.path.exists(dataset_path):
        raise FileNotFoundError(f"Dataset {dataset_path} not found.")

    df = pd.read_csv(dataset_path)

    # 2. Select Features & Target
    feature_cols = [
        'danceability', 'energy', 'loudness', 'tempo', 
        'duration_minutes', 'upbeat_score', 'popularity', 'artist_track_count'
    ]
    target_col = 'log_stream_count'

    X = df[feature_cols]
    y = df[target_col]

    # 3. Train / Test Split & Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # 4. Model Benchmarking (Gradient Boosting vs Random Forest)
    models = {
        "Gradient Boosting Regressor": GradientBoostingRegressor(n_estimators=100, max_depth=5, random_state=42),
        "Random Forest Regressor": RandomForestRegressor(n_estimators=100, max_depth=10, random_state=42, n_jobs=-1)
    }

    results = {}
    best_model_name = None
    best_r2 = -1.0
    best_model = None

    for name, model in models.items():
        model.fit(X_train_scaled, y_train)
        preds = model.predict(X_test_scaled)

        r2 = r2_score(y_test, preds)
        mae = mean_absolute_error(y_test, preds)
        rmse = np.sqrt(mean_squared_error(y_test, preds))

        results[name] = {
            "R2": round(float(r2), 4),
            "MAE": round(float(mae), 4),
            "RMSE": round(float(rmse), 4)
        }

        if r2 > best_r2:
            best_r2 = r2
            best_model_name = name
            best_model = model

    # 5. Export Serialized Binary Artifact
    artifact_data = {
        "model": best_model,
        "scaler": scaler,
        "feature_cols": feature_cols,
        "metrics": results,
        "best_model_name": best_model_name
    }

    output_path = os.path.join(os.path.dirname(__file__), "model_artifacts.joblib")
    joblib.dump(artifact_data, output_path)
    print(f"✅ Model training complete. Champion model ({best_model_name}) saved to {output_path}")

if __name__ == "__main__":
    build_and_save_artifacts()