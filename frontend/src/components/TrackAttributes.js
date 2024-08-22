import React from 'react';

const TrackAttributes = ({ attributes }) => {
    return (
        <div>
            <h3>Track Attributes</h3>
            <ul>
                <li>Energy: {attributes.energy}</li>
                <li>Danceability: {attributes.danceability}</li>
                <li>Happiness: {attributes.happiness}</li>
                {/* Add more attributes as needed */}
            </ul>
        </div>
    );
};

export default TrackAttributes;
