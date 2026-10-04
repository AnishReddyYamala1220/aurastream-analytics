import ModelComparison from '@/components/ModelComparison';

export default function ModelsPage() {
  return (
    <div>
      <div className="page-header">
        <h1>Machine Learning Model Comparison</h1>
        <p>Evaluation metrics and validation scores for stream count regression algorithms</p>
      </div>

      <ModelComparison />
    </div>
  );
}