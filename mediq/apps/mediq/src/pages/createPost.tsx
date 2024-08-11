import React, { useState } from 'react';

const CreatePost = () => {
    const [content, setContent] = useState('');
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);
    const [links, setLinks] = useState([]);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleVideoUpload = (e) => {
        const uploadedVideos = Array.from(e.target.files).map(file =>
            URL.createObjectURL(file)
        );
        setVideos([...videos, ...uploadedVideos]);
    };

    const handleImageUpload = (e) => {
        const uploadedImages = Array.from(e.target.files).map(file =>
            URL.createObjectURL(file)
        );
        setImages([...images, ...uploadedImages]);
    };

    const handleLinkUpload = () => {
        const link = prompt('Enter the link URL');
        if (link) {
            setLinks([...links, link]);
        }
    };

    return (
        <section className='create-post'>
        <div className="w-full max-w-xl mx-auto  p-4 border border-gray-300 rounded-lg bg-white">
            <textarea
                placeholder="What's on your mind?"
                value={content}
                onChange={handleContentChange}
                rows={4}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-around mb-4">
                <label className="cursor-pointer">
                    <input
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={handleVideoUpload}
                        className="hidden"
                    />
                    <i className="text-2xl">{"🎥"}</i>
                </label>
                <label className="cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    <i className="text-2xl">📷</i>
                </label>
                <button onClick={handleLinkUpload} className="text-2xl">
                    {"🔗"}
                </button>
            </div>

            <div className="space-y-4">
                {videos.map((video, index) => (
                    <video key={index} src={video} controls className="w-full rounded-md" />
                ))}
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`upload-${index}`} className="w-full rounded-md" />
                ))}
                {links.map((link, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        {link}
                    </a>
                ))}
            </div>
        </div>
        </section>
    );
};

export default CreatePost;
