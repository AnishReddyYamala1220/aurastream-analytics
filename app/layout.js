import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'AuraStream Analytics | Music Intelligence',
  description: 'Spotify Predictive Intelligence & Feature Analytics Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}