'use client';
import React from 'react';

export default function AnalyticsCharts() {
  // Chart 1 Data: Yearly Stream Growth (Line Chart)
  const yearlyData = [
    { year: '2020', streams: 1.8 },
    { year: '2021', streams: 2.5 },
    { year: '2022', streams: 3.2 },
    { year: '2023', streams: 4.1 },
    { year: '2024', streams: 4.8 },
    { year: '2025', streams: 5.6 },
  ];

  // Chart 2 Data: Feature Impact Correlation (Bar Chart)
  const featureCorrelations = [
    { feature: 'Danceability', correlation: 0.78 },
    { feature: 'Energy', correlation: 0.65 },
    { feature: 'Loudness', correlation: 0.58 },
    { feature: 'Valence', correlation: 0.42 },
    { feature: 'Acousticness', correlation: -0.35 },
  ];

  // Chart 3 Data: Genre Distribution (Horizontal Bar Chart)
  const genreData = [
    { genre: 'Pop', percentage: 38 },
    { genre: 'Hip-Hop / Rap', percentage: 27 },
    { genre: 'EDM / Electronic', percentage: 18 },
    { genre: 'Indie / Rock', percentage: 11 },
    { genre: 'R&B / Soul', percentage: 6 },
  ];

  return (
    <div className="charts-grid">
      {/* Chart 1: Yearly Streaming Trend (Line Chart) */}
      <div className="card">
        <div className="card-title">1. Yearly Streaming Volume Trend</div>
        <div className="card-subtitle">Total Average Streams per Track (Millions) from 2020–2025</div>
        
        <svg viewBox="0 0 500 200" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          {/* Grid lines */}
          <line x1="40" y1="20" x2="480" y2="20" stroke="#27272a" strokeDasharray="4" />
          <line x1="40" y1="70" x2="480" y2="70" stroke="#27272a" strokeDasharray="4" />
          <line x1="40" y1="120" x2="480" y2="120" stroke="#27272a" strokeDasharray="4" />
          <line x1="40" y1="170" x2="480" y2="170" stroke="#27272a" />

          {/* Line Path */}
          <path
            d="M 60 160 L 140 130 L 220 100 L 300 68 L 380 45 L 460 20"
            fill="none"
            stroke="#1DB954"
            strokeWidth="3"
          />

          {/* Area Gradient Fill */}
          <path
            d="M 60 160 L 140 130 L 220 100 L 300 68 L 380 45 L 460 20 L 460 170 L 60 170 Z"
            fill="rgba(29, 185, 84, 0.1)"
          />

          {/* Points & Labels */}
          {yearlyData.map((d, i) => {
            const x = 60 + i * 80;
            const y = 170 - (d.streams / 6) * 150;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill="#1DB954" stroke="#09090b" strokeWidth="2" />
                <text x={x} y={y - 10} fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">
                  {d.streams}M
                </text>
                <text x={x} y="188" fill="#a1a1aa" fontSize="11" textAnchor="middle">
                  {d.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Chart 2: Audio Feature Correlation with Streams (Vertical Bar Chart) */}
      <div className="card">
        <div className="card-title">2. Audio Feature Impact Analysis</div>
        <div className="card-subtitle">Pearson Correlation Coefficient relative to Stream Volume</div>
        
        <svg viewBox="0 0 500 200" style={{ width: '100%', height: 'auto' }}>
          <line x1="40" y1="100" x2="480" y2="100" stroke="#3f3f46" strokeWidth="1.5" />
          
          {featureCorrelations.map((item, i) => {
            const x = 60 + i * 85;
            const barHeight = Math.abs(item.correlation) * 80;
            const isPositive = item.correlation > 0;
            const y = isPositive ? 100 - barHeight : 100;
            const color = isPositive ? '#1DB954' : '#ef4444';

            return (
              <g key={i}>
                <rect x={x} y={y} width="40" height={barHeight} fill={color} rx="4" />
                <text x={x + 20} y={isPositive ? y - 6 : y + barHeight + 14} fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">
                  {item.correlation > 0 ? `+${item.correlation}` : item.correlation}
                </text>
                <text x={x + 20} y={isPositive ? 185 : 15} fill="#a1a1aa" fontSize="10" textAnchor="middle">
                  {item.feature}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Chart 3: Track Mood & Acoustic Profile (SVG Donut Chart) */}
      <div className="card">
        <div className="card-title">3. Track Profile & Mood Distribution</div>
        <div className="card-subtitle">Categorization of analyzed dataset tracks by dominant audio mood</div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '1rem' }}>
          <svg viewBox="0 0 160 160" style={{ width: '160px', height: '160px' }}>
            {/* Energetic High-Tempo (45%) */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#1DB954" strokeWidth="24" strokeDasharray="170 377" strokeDashoffset="0" />
            {/* Chill Acoustic (30%) */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#3b82f6" strokeWidth="24" strokeDasharray="113 377" strokeDashoffset="-170" />
            {/* Upbeat Party (15%) */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#f59e0b" strokeWidth="24" strokeDasharray="56 377" strokeDashoffset="-283" />
            {/* Ambient / Instrumental (10%) */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#8b5cf6" strokeWidth="24" strokeDasharray="38 377" strokeDashoffset="-339" />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#1DB954' }}></span>
              <span>Energetic Dance (45%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#3b82f6' }}></span>
              <span>Chill Acoustic (30%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#f59e0b' }}></span>
              <span>Upbeat Pop (15%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#8b5cf6' }}></span>
              <span>Ambient / Other (10%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart 4: Genre Representation Breakdown (Horizontal Bar Chart) */}
      <div className="card">
        <div className="card-title">4. Top Genre Share in Dataset</div>
        <div className="card-subtitle">Percentage proportion across 12,450 analyzed catalog tracks</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {genreData.map((g, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 600 }}>{g.genre}</span>
                <span style={{ color: '#1DB954', fontWeight: 700 }}>{g.percentage}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#27272a', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${g.percentage}%`, height: '100%', backgroundColor: '#1DB954', borderRadius: '4px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}