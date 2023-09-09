import React from 'react';

// Header component meant to be used across all pages
export function UIHeader (): React.ReactElement {
    return (
        <header className='shadow-md bg-white p-2'>
            <h1 className='text-purple-700 text-4xl m-2 italic font-medium drop-shadow-md'>ThreatScore</h1>
        </header>
    );
}
