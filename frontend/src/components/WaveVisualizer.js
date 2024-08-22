import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const WaveVisualizer = ({ audioUrl }) => {
    const waveformRef = useRef(null);

    useEffect(() => {
        if (audioUrl) {
            const wavesurfer = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#ddd',
                progressColor: '#f50057',
                responsive: true,
                barWidth: 3,
            });
            wavesurfer.load(audioUrl);
        }
    }, [audioUrl]);

    return <div ref={waveformRef} />;
};

export default WaveVisualizer;
