import React from 'react';
import VideoForm from '../components/VideoForm';

const NewVideo = ({ onAddVideo }) => {
    return (
        <div>
            <h1>Nuevo Video</h1>
            <VideoForm onSubmit={onAddVideo} />
        </div>
    );
};

export default NewVideo;
