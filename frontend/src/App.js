import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [audioUrl, setAudioUrl] = useState('');
    const [attributes, setAttributes] = useState({});

    const handleAnalyze = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/analysis/analyze', { audioUrl });
            setAttributes(response.data);
        } catch (error) {
            console.error('Error analyzing track:', error);
            alert('Failed to fetch or analyze the audio. Please check the URL or try again later.');
        }
    };

    return (
        <div className="App">
            <h1>Music Analyzer</h1>
            <input
                type="text"
                placeholder="Enter audio URL"
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
            />
            <button onClick={handleAnalyze}>Analyze</button>
            <div>
                <h3>Track Attributes</h3>
                <ul>
                    <li>Energy: {attributes.energy}</li>
                    <li>Danceability: {attributes.danceability}</li>
                    <li>Happiness: {attributes.happiness}</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
