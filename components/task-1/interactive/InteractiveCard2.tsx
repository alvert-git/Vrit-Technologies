"use client";

import React, { useState } from 'react';
import Card2 from '../Card2';
import HoveredCard2 from '../HoveredCard2';
import HoveredCard3 from '../HoveredCard3';

const InteractiveCard2 = () => {
    const [view, setView] = useState(0); // 0 = normal, 1 = hover1, 2 = hover2


    const handleMouseLeave = () => setView(0);
    const handleMouseEnter = () => {
        if (view === 0) setView(1);
    };

    return (
        <div
            className="relative w-full max-w-[600px] h-[21rem]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out z-30
        ${view === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                <Card2 />
            </div>

            <div className={`absolute inset-0 transition-all duration-500 ease-in-out z-20
        ${view === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <HoveredCard2 onNext={() => setView(2)} />
            </div>

            {/* HOVERED CARD 3 (View 2) */}
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out z-10
        ${view === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <HoveredCard3 onPrev={() => setView(1)} />
            </div>
        </div>
    );
};

export default InteractiveCard2;