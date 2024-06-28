import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoEditForm from '../components/VideoEditForm';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [editingVideo, setEditingVideo] = useState(null);

    const handleEdit = (video) => {
        setEditingVideo(video);
    };

    const handleSave = (updatedVideo) => {
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
        setEditingVideo(null);
    };

    return (
        <div>
            <h1>AluraFlix</h1>
            {editingVideo ? (
                <VideoEditForm video={editingVideo} onSave={handleSave} />
            ) : (
                <div className="video-list">
                    {videos.map(video => (
                        <VideoCard key={video.id} video={video} onEdit={handleEdit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
