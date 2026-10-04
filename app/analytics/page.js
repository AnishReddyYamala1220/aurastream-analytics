import AnalyticsCharts from '@/components/AnalyticsCharts';

export default function AnalyticsPage() {
  return (
    <div>
      <div className="page-header">
        <h1>Exploratory Data Analysis & Cleaning</h1>
        <p>Visualizing streaming trends, audio feature correlations, and data preprocessing steps</p>
      </div>

      {/* Data Cleaning & Wrangling Pipeline Summary Card */}
      <div className="card">
        <div className="card-title">Data Wrangling & Cleaning Pipeline</div>
        <div className="card-subtitle">Preprocessing applied to 12,450 raw Spotify records prior to model training</div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Preprocessing Step</th>
                <th>Operation Performed</th>
                <th>Impact / Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Missing Value Handling</strong></td>
                <td>Dropped null/NaN track entries and negative stream values</td>
                <td>Ensures complete numerical feature vectors for model input</td>
              </tr>
              <tr>
                <td><strong>Deduplication</strong></td>
                <td>Removed duplicate tracks based on Track ID and Artist name</td>
                <td>Prevents data leakage between train and test splits</td>
              </tr>
              <tr>
                <td><strong>Log Transformation</strong></td>
                <td>Applied <code style={{ color: '#1DB954' }}>y = ln(1 + streams)</code> to target variable</td>
                <td>Normalizes heavy right-skewness in viral track streaming distributions</td>
              </tr>
              <tr>
                <td><strong>Feature Engineering</strong></td>
                <td>Created composite <code style={{ color: '#1DB954' }}>upbeat_score</code> & duration in minutes</td>
                <td>Extracts higher-level semantic features for regression models</td>
              </tr>
              <tr>
                <td><strong>Feature Scaling</strong></td>
                <td>StandardScaler zero-mean unit-variance scaling</td>
                <td>Balances input feature magnitudes (e.g., Tempo vs Danceability)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual EDA Charts */}
      <AnalyticsCharts />
    </div>
  );
}