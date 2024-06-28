import React, { useState } from 'react';

const VideoEditForm = ({ video, onSave }) => {
    const [title, setTitle] = useState(video.title);
    const [category, setCategory] = useState(video.category);
    const [image, setImage] = useState(video.image);
    const [videoUrl, setVideoUrl] = useState(video.video);
    const [description, setDescription] = useState(video.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...video, title, category, image, video: videoUrl, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Ingrese el título" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                required
            >
                <option value="frontend">Front End</option>
                <option value="backend">Back End</option>
                <option value="innovation">Innovación y Gestión</option>
            </select>
            <input 
                type="text" 
                placeholder="URL de la imagen" 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="URL del video" 
                value={videoUrl} 
                onChange={(e) => setVideoUrl(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Descripción" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            ></textarea>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default VideoEditForm;
