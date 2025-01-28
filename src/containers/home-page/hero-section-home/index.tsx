'use client'

import "./style.css"; // Arquivo CSS convertido

export default function HeroSectionHome() {
    return (
        <div className="hero-section">
            <main className="hero-main">
                <div className="video-container">
                    <div className="video-wrapper">
                        <video
                            src="./banner1280.mp4"
                            autoPlay
                            loop
                            muted
                            className="video-element"
                        ></video>
                    </div>
                </div>
            </main>
        </div>
    );
}
