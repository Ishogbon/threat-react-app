import React, { useState, useEffect } from 'react';

const Geolocation: React.FC = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    // Function to get the user's geolocation
        const getGeolocation = (): void => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    setError(error.message);
                }
            );
        };

        getGeolocation();
    }, []);

    return (
        <div>
            {typeof latitude === 'number' && typeof longitude === 'number'
                ? (
                    <div>
                        <h2>Your Geolocation</h2>
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                    </div>
                )
                : typeof error === 'object'
                    ? (
                        <p>Error: {error}</p>
                    )
                    : (
                        <p>Loading geolocation data...</p>
                    )}
        </div>
    );
};

export default Geolocation;
