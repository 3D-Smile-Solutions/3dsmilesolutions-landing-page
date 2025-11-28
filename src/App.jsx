import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      color: 'white',
      maxWidth: '600px',
      width: '100%',
      animation: 'fadeInUp 0.8s ease-out',
      padding: '20px 0'
    }}>
      {/* Construction Icon */}
      <div style={{
        fontSize: 'clamp(50px, 10vw, 80px)',
        marginBottom: 'clamp(15px, 4vw, 30px)',
        animation: 'bounce 2s infinite'
      }}>
        🚧
      </div>
      
      {/* Main Heading */}
      <h1 style={{
        fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
        marginBottom: 'clamp(10px, 3vw, 20px)',
        fontWeight: '700',
        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
        letterSpacing: '-1px'
      }}>
        Site Under Construction
      </h1>
      
      {/* Animated Loading Text */}
      <div style={{
        fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
        marginBottom: 'clamp(15px, 3vw, 30px)',
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
        marginBottom: 'clamp(20px, 4vw, 40px)'
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
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        lineHeight: '1.6',
        marginBottom: 'clamp(20px, 4vw, 40px)',
        opacity: '0.95'
      }}>
        We're working hard to bring you something special. 
        Our site is currently undergoing scheduled maintenance and improvements.
      </p>

      {/* CTA Section for Checklist */}
      <div style={{
        marginBottom: 'clamp(20px, 4vw, 40px)',
        padding: 'clamp(20px, 4vw, 30px)',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontSize: 'clamp(32px, 6vw, 42px)',
          marginBottom: 'clamp(10px, 2vw, 15px)'
        }}>
          ✅
        </div>
        <h2 style={{
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          marginBottom: 'clamp(10px, 2vw, 15px)',
          fontWeight: '600'
        }}>
          Revenue Operations Checklist
        </h2>
        <p style={{
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          marginBottom: 'clamp(15px, 3vw, 25px)',
          opacity: '0.9',
          lineHeight: '1.5'
        }}>
          While we're building, check out our comprehensive RevOps checklist to optimize your revenue operations strategy.
        </p>
        <Link to="/revopschecklist" style={{
          display: 'inline-block',
          padding: 'clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)',
          backgroundColor: '#19547b',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(25, 84, 123, 0.4)',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#1a5f8a';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(25, 84, 123, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#19547b';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(25, 84, 123, 0.4)';
        }}>
          Access Checklist →
        </Link>
      </div>
      
      {/* Coming Soon Badge */}
      <div style={{
        display: 'inline-block',
        padding: 'clamp(8px, 2vw, 12px) clamp(20px, 4vw, 30px)',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: '50px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.25)',
        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        Coming Soon
      </div>
      
      {/* Tools Icons */}
      <div style={{
        marginTop: 'clamp(25px, 5vw, 50px)',
        fontSize: 'clamp(24px, 5vw, 30px)',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        opacity: '0.7',
        paddingBottom: '20px'
      }}>
        <span style={{ animation: 'rotate 3s linear infinite' }}>⚙️</span>
        <span style={{ animation: 'hammer 1s ease-in-out infinite' }}>🔨</span>
        <span style={{ animation: 'rotate 3s linear infinite reverse' }}>⚙️</span>
      </div>
      
      {/* Empty spacer div */}
      <div style={{
        width: '100%',
        height: '20px'
      }}></div>
    </div>
  );
}

function ChecklistPage() {
  return (
<>
  <style>
    {`
      @media (max-width: 555px) {
        .r-checklist-button {
          font-size: 0.75rem !important;
          padding: 6px 10px !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
        }
        .r-checklist-title {
          font-size: 0.9rem !important;
        }
        .r-checklist-div {
          padding: 12px 15px !important;
          gap: 10px !important;
        }
      }
      
      @media (max-width: 400px) {
        .r-checklist-button {
          font-size: 0.7rem !important;
          padding: 6px 8px !important;
        }
        .r-checklist-title {
          font-size: 0.85rem !important;
        }
        .r-checklist-div {
          gap: 8px !important;
        }
      }
      
      @media (max-height: 600px) {
        .r-checklist-div {
          padding: 10px 20px !important;
        }
      }
    `}
  </style>

  <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }}>
    {/* Header with back button */}
    <div 
      className='r-checklist-div'  
      style={{
        padding: '20px 30px',
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '15px',
        flexShrink: 0,
        flexWrap: 'nowrap'
      }}>
      <Link
        to="/"
        className="r-checklist-button"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }}
      >
        ← Back to Home
      </Link>

      <h1
        className="r-checklist-title"
        style={{
          color: 'white',
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: '600',
          textAlign: 'right',
          flexGrow: 1,
          minWidth: 0
        }}
      >
        Revenue Operations Checklist
      </h1>
    </div>

    {/* Embedded Checklist - with flex: 1 to fill remaining space and bottom padding */}
    <div style={{
      flex: 1,
      width: '100%',
      minHeight: 0,
      paddingBottom: '20px',
      backgroundColor: 'white',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <iframe
        src="https://revenue-operations-checklist-one.vercel.app/"
        style={{
          flex: 1,
          width: '100%',
          border: 'none',
          backgroundColor: 'white',
          minHeight: 0
        }}
        title="Revenue Operations Checklist"
      />
    </div>
  </div>
</>

  );
}

function App() {
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
    <Router>
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
        alignItems: 'stretch',
        justifyContent: 'center',
        fontFamily: "Urbanist",
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <Routes>
          <Route path="/" element={
            <div style={{ 
              padding: '30px 20px',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              overflowY: 'auto',
              overflowX: 'hidden',
              boxSizing: 'border-box'
            }}>
              <HomePage />
            </div>
          } />
          <Route path="/revopschecklist" element={<ChecklistPage />} />
        </Routes>
        
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

          /* Smooth scrolling for all browsers */
          * {
            -webkit-overflow-scrolling: touch;
          }

          /* Ensure scrollbar is always visible on desktop */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;