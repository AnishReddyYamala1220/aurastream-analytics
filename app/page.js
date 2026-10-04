import Link from 'next/link';
import MetricsOverview from '@/components/MetricsOverview';

export default function Home() {
  const datasetSample = [
    { name: "Blinding Lights", artist: "The Weeknd", year: 2020, streams: "3.88B", danceability: "0.51", upbeat: "0.76" },
    { name: "As It Was", artist: "Harry Styles", year: 2022, streams: "2.95B", danceability: "0.52", upbeat: "0.81" },
    { name: "Starboy", artist: "The Weeknd", year: 2020, streams: "2.61B", danceability: "0.68", upbeat: "0.72" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h1>Executive Dashboard</h1>
        <p>AuraStream Predictive Intelligence & Music Catalog Analytics (12,450 Records)</p>
      </div>

      {/* Top High-Level KPI Cards */}
      <MetricsOverview />

      {/* Module Gateway / Quick Jump Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <Link href="/analytics" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ marginBottom: 0, height: '100%', transition: 'border-color 0.2s' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📈</div>
            <div className="card-title">1. Visual EDA</div>
            <div className="card-subtitle" style={{ marginBottom: 0 }}>
              Explore 4 interactive charts covering yearly trends, feature correlations, and mood distribution.
            </div>
          </div>
        </Link>

        <Link href="/models" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ marginBottom: 0, height: '100%' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤖</div>
            <div className="card-title">2. Model Benchmarks</div>
            <div className="card-subtitle" style={{ marginBottom: 0 }}>
              Compare Gradient Boosting ($R^2 = 0.891$) vs Random Forest ($R^2 = 0.854$) metrics.
            </div>
          </div>
        </Link>

        <Link href="/predict" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ marginBottom: 0, height: '100%' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</div>
            <div className="card-title">3. Stream Predictor</div>
            <div className="card-subtitle" style={{ marginBottom: 0 }}>
              Run real-time streaming volume inference using custom audio track parameters.
            </div>
          </div>
        </Link>
      </div>

      {/* Key Drivers of Streaming Success (Feature Importance Summary) */}
      <div className="card">
        <div className="card-title">Key Drivers of Streaming Performance</div>
        <div className="card-subtitle">Top features identified by the Gradient Boosting model</div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#18181b', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #27272a' }}>
            <div style={{ color: '#1DB954', fontWeight: 700, fontSize: '0.875rem' }}>#1 Playlist Reach</div>
            <div style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 800, margin: '0.25rem 0' }}>Weight: 38.4%</div>
            <p style={{ color: '#a1a1aa', fontSize: '0.75rem' }}>Inclusion in major editorial playlists drives exponential stream amplification.</p>
          </div>

          <div style={{ backgroundColor: '#18181b', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #27272a' }}>
            <div style={{ color: '#1DB954', fontWeight: 700, fontSize: '0.875rem' }}>#2 Danceability</div>
            <div style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 800, margin: '0.25rem 0' }}>Weight: 26.1%</div>
            <p style={{ color: '#a1a1aa', fontSize: '0.75rem' }}>Rhythmic suitability for dancing correlates strongly with repeat play counts.</p>
          </div>

          <div style={{ backgroundColor: '#18181b', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #27272a' }}>
            <div style={{ color: '#1DB954', fontWeight: 700, fontSize: '0.875rem' }}>#3 Upbeat Score</div>
            <div style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 800, margin: '0.25rem 0' }}>Weight: 18.7%</div>
            <p style={{ color: '#a1a1aa', fontSize: '0.75rem' }}>Composite metric of (Danceability + Energy) / 2 acts as a primary catalyst.</p>
          </div>
        </div>
      </div>

      {/* Dataset Sample Preview Table */}
      <div className="card">
        <div className="card-title">Dataset Preview (Sample Records)</div>
        <div className="card-subtitle">Representative tracks from the 12,450-record Spotify corpus</div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Track Title</th>
                <th>Artist</th>
                <th>Release Year</th>
                <th>Total Streams</th>
                <th>Danceability</th>
                <th>Upbeat Score</th>
              </tr>
            </thead>
            <tbody>
              {datasetSample.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.name}</strong></td>
                  <td>{row.artist}</td>
                  <td>{row.year}</td>
                  <td style={{ color: '#1DB954', fontWeight: 'bold' }}>{row.streams}</td>
                  <td>{row.danceability}</td>
                  <td>{row.upbeat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Technical Architecture & Stack Banner */}
      <div className="card" style={{ backgroundColor: '#18181b' }}>
        <div className="card-title">Project Architecture & Stack</div>
        <div className="card-subtitle" style={{ marginBottom: '1rem' }}>End-to-End Analytics & Inference Infrastructure</div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="badge badge-gray">Next.js 14 App Router</span>
          <span className="badge badge-gray">React Client Components</span>
          <span className="badge badge-gray">Python 3.11</span>
          <span className="badge badge-gray">FastAPI Engine</span>
          <span className="badge badge-gray">Scikit-Learn</span>
          <span className="badge badge-gray">Pandas Data Wrangling</span>
          <span className="badge badge-green">StandardScaler Pipeline</span>
        </div>
      </div>
    </div>
  );
}