"use client";

import React, { useState } from 'react';
import Card1 from '../Card1';
import HoveredCard1 from '../HoveredCard1';

const InteractiveCard1 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full max-w-[600px] h-[21rem]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`
        absolute inset-0 transition-all duration-700 ease-in-out z-20
        ${isHovered ? 'opacity-0 -translate-x-20 pointer-events-none' : 'opacity-100 translate-x-0'}
      `}>
                <Card1 />
            </div>

            <div className={`
        absolute inset-0 transition-all duration-700 ease-in-out z-10
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0  pointer-events-none'}
      `}>
                <HoveredCard1 />
            </div>
        </div>
    );
};

export default InteractiveCard1;