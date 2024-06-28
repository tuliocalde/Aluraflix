import React, { useState } from 'react';

const VideoForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, category, image, video, description });
        setTitle('');
        setCategory('');
        setImage('');
        setVideo('');
        setDescription('');
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
                <option value="">Seleccione una categoría</option>
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
                value={video} 
                onChange={(e) => setVideo(e.target.value)} 
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

export default VideoForm;
