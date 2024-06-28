import React from 'react';

const VideoCard = ({ video, onEdit }) => {
    return (
        <div className="video-card">
            <img src={video.image} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <button onClick={() => onEdit(video)}>Editar</button>
        </div>
    );
};

export default VideoCard;
