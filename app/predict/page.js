import StreamPredictor from '@/components/StreamPredictor';

export default function PredictPage() {
  return (
    <div>
      <div className="page-header">
        <h1>Real-time Stream Predictor</h1>
        <p>Input track characteristics to compute expected stream volume and tier tiering</p>
      </div>

      <StreamPredictor />
    </div>
  );
}