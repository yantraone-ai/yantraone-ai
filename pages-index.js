export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'sans-serif',
      padding: '80px',
      background: 'linear-gradient(to bottom, #e0f2fe, white)',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '48px', color: '#1d4ed8' }}>🤖 Yantra One</h1>
      <p style={{ color: '#374151', maxWidth: '600px', margin: '20px auto' }}>
        Building India's next generation of innovators in Robotics, AI, and Automation.
        <br /><br />
        Empowering schools, industries, and creators with affordable, smart, and scalable technology.
      </p>
      <div style={{ marginTop: '40px' }}>
        <button style={button}>Learn Robotics (Work in Progress)</button>
        <button style={{ ...button, background: '#16a34a' }}>Talk to YantraAI (Coming Soon)</button>
        <button style={{ ...button, background: '#ea580c' }}>Automate My Industry (In Development)</button>
      </div>
      <p style={{ marginTop: '80px', color: '#6b7280', fontSize: '14px' }}>
        © {new Date().getFullYear()} Yantra One • All Rights Reserved
      </p>
    </div>
  );
}

const button = {
  background: '#2563eb',
  color: 'white',
  border: 'none',
  padding: '14px 24px',
  borderRadius: '8px',
  margin: '10px',
  cursor: 'pointer',
  fontSize: '16px'
};