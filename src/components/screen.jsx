import React from 'react';
import './screen.css';
import StatusBar from './status_bar';

const Screen = ({ children }) => {
    return (
        <div className="screen_container items-center bg-gray-50 text-black rounded-lg shadow-lg">
            <StatusBar />
            {children}
        </div>
    );
}

export default Screen;