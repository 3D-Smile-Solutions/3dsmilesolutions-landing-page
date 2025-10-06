import { useState, useEffect } from 'react';

function App() {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Set full screen styles on mount
  useEffect(() => {
    // Override body styles to ensure full screen
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    
    // Override #root styles
    const root = document.getElementById('root');
    if (root) {
      root.style.maxWidth = '100%';
      root.style.width = '100vw';
      root.style.height = '100vh';
      root.style.margin = '0';
      root.style.padding = '0';
    }
    
    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      if (root) {
        root.style.maxWidth = '';
        root.style.width = '';
        root.style.height = '';
        root.style.margin = '';
        root.style.padding = '';
      }
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #191f38ff 0%, #0f0a14ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontfamily: "Urbanist",
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px',
        width: '100%',
        animation: 'fadeInUp 0.8s ease-out'
      }}>
        {/* Construction Icon */}
        <div style={{
          fontSize: '80px',
          marginBottom: '30px',
          animation: 'bounce 2s infinite'
        }}>
          🚧
        </div>
        
        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '20px',
          fontWeight: '700',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          letterSpacing: '-1px'
        }}>
          Site Under Construction
        </h1>
        
        {/* Animated Loading Text */}
        <div style={{
          fontSize: '1.2rem',
          marginBottom: '30px',
          opacity: '0.9',
          minHeight: '30px'
        }}>
          Building something amazing{dots}
        </div>
        
        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '40px'
        }}>
          <div style={{
            height: '100%',
            width: '65%',
            background: 'linear-gradient(90deg, #ffd89b 0%, #19547b 100%)',
            borderRadius: '4px',
            animation: 'progress 2s ease-in-out infinite'
          }}/>
        </div>
        
        {/* Description */}
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '40px',
          opacity: '0.95'
        }}>
          We're working hard to bring you something special. 
          Our site is currently undergoing scheduled maintenance and improvements.
        </p>
        
        {/* Coming Soon Badge */}
        <div style={{
          display: 'inline-block',
          padding: '12px 30px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.25)',
          fontSize: '1rem',
          fontWeight: '500',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          Coming Soon
        </div>
        
        {/* Tools Icons */}
        <div style={{
          marginTop: '50px',
          fontSize: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          opacity: '0.7'
        }}>
          <span style={{ animation: 'rotate 3s linear infinite' }}>⚙️</span>
          <span style={{ animation: 'hammer 1s ease-in-out infinite' }}>🔨</span>
          <span style={{ animation: 'rotate 3s linear infinite reverse' }}>⚙️</span>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes hammer {
          0%, 100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;