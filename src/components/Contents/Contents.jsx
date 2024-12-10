import { useEffect, useState } from 'react'; // Importing hooks
import axios from 'axios';
import './Contents.css';

function Contents() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors

    useEffect(() => {
        // Fetching videos from the server
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://yt-api-jw2k.onrender.com/api/videos');
                setVideos(response.data);
                setLoading(false);  
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []); 
    if (loading) {
        return (
            <div className="feed">
                <p>Loading videos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="feed">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="feed">
            {videos.length > 0 ? (
                videos.map((feed) => (
                    <div key={feed.id} className="vid">
                        <img src={feed.img_url} alt={feed.title} className="Video-thumb" />
                        <div className="Channel">
                            <div>
                                {feed.channel && <img src={feed.channel} alt="channel" />} {/* Check if channel exists */}
                            </div>
                            <div>
                                <p className="title">{feed.title}</p>
                                <p className="info">{feed.description || 'No description available'}</p>
                                <p className="info">{feed.views || 'Views not available'}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No videos found.</p>
            )}
        </div>
    );
}

export default Contents;
