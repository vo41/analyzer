import React, { useState } from 'react';
import WaveVisualizer from './components/WaveVisualizer';
import TrackAttributes from './components/TrackAttributes';
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
            <WaveVisualizer audioUrl={audioUrl} />
            <TrackAttributes attributes={attributes} />
        </div>
    );
}

export default App;
