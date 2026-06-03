import React, { useEffect } from 'react'

function Welcome({ setShowWelcome }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [setShowWelcome])

    return (
        <div className="welcome-container">
            <div className="stars"></div>
            <div className="twinkling-stars"></div>
            <div className="nebula"></div>
            
            <div className="welcome-content">
                <h1 className="welcome-title">
                    {'Welcome to My Portfolio'.split('').map((letter, index) => (
                        <span key={index} className="letter" style={{ animationDelay: `${index * 0.08}s` }}>
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </h1>
                <div className="welcome-loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}

// CSS INJECTED AT THE BOTTOM
const styles = document.createElement('style')
styles.textContent = `
    .welcome-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeOutWelcome 0.8s ease 3.5s forwards;
        overflow: hidden;
    }

    /* Galaxy Stars */
    .stars {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-image: radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 190px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 200px 250px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 240px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 300px 180px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 350px 280px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 400px 100px, #fff, rgba(0,0,0,0));
        background-size: 200px 200px;
        background-repeat: repeat;
        opacity: 0.7;
        animation: twinkle 3s infinite alternate;
        z-index: 1;
    }

    .twinkling-stars {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: twinkleMove 10s linear infinite;
        z-index: 2;
    }

    .nebula {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 30% 40%, rgba(138, 43, 226, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(75, 0, 130, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(100, 0, 255, 0.2) 0%, transparent 60%);
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: pulse 8s ease-in-out infinite alternate;
        z-index: 3;
    }

    .welcome-content {
        position: relative;
        z-index: 10;
        text-align: center;
    }

    .welcome-title {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 30px;
        letter-spacing: 5px;
    }

    .letter {
        display: inline-block;
        background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: bounceLetter 0.5s ease forwards;
        opacity: 0;
        transform: translateY(50px);
    }

    @keyframes bounceLetter {
        0% {
            opacity: 0;
            transform: translateY(50px) scale(0.5);
        }
        50% {
            opacity: 0.5;
            transform: translateY(-10px) scale(1.2);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .welcome-loader {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 50px;
        opacity: 0;
        animation: fadeInUp 0.5s ease 2.5s forwards;
    }

    .dot {
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #b8a8ff, #7b68ee);
        border-radius: 50%;
        animation: loading 1.4s ease-in-out infinite;
    }

    .dot:nth-child(1) { animation-delay: 0s; }
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes loading {
        0%, 100% { transform: scale(0.5); opacity: 0.3; }
        50% { transform: scale(1.2); opacity: 1; }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes twinkle {
        0% { opacity: 0.3; }
        100% { opacity: 0.8; }
    }

    @keyframes twinkleMove {
        0% { background-position: 0 0; opacity: 0.5; }
        100% { background-position: 100px 100px; opacity: 1; }
    }

    @keyframes pulse {
        0% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
    }

    @keyframes fadeOutWelcome {
        to { opacity: 0; visibility: hidden; }
    }

    @media (max-width: 768px) {
        .welcome-title { font-size: 2rem; letter-spacing: 3px; }
    }

    @media (max-width: 480px) {
        .welcome-title { font-size: 1.3rem; letter-spacing: 2px; }
    }
`
document.head.appendChild(styles)

export default Welcome