// components/YouTubeVideo.tsx

import React from 'react';

interface YouTubeVideoProps {
    videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div style={{margin: '15px auto 30px auto', border: '5px solid #37B782FF', width: 880, padding: 15}}>
            <iframe
                width="840"
                height="490"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;
