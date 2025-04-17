import Dashboard from './user_tracking_dashboard';
// import './App.css'; // Removed as this file was deleted and styling is handled by Tailwind

function App() {
  try {
    return (
      <div className="app-container">
        <Dashboard />
      </div>
    );
  } catch (error) {
    console.error("Error rendering dashboard:", error);
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        backgroundColor: '#fef2f2', 
        color: '#dc2626',
        margin: '20px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h2>Error Loading Dashboard</h2>
        <p>There was an error loading the dashboard. Please check the console for details.</p>
      </div>
    );
  }
}

export default App;
