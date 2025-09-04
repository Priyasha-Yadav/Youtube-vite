import { useEffect, useState } from 'react';
import axios from 'axios';
import './Contents.css';

function Contents({ searchQuery }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [maxResults, setMaxResults] = useState(12);  // State to control maxResults
  const [selectedVideoId, setSelectedVideoId] = useState(null); // State to store selected video ID
  const API_KEY = 'AIzaSyCUBTaA9ubcOugfW7ZClua9tizLgdPBqQU';
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;

        console.log("Fetching videos for query:", searchQuery);

        if (searchQuery.trim()) {
          const params = {
            part: 'snippet',
            q: searchQuery,
            key: API_KEY,
            type: 'video',
            maxResults: maxResults  // Use maxResults from state here
          };

          response = await axios.get(YOUTUBE_API_URL, { params });

          console.log("API Response:", response);

          if (response.data.items && response.data.items.length > 0) {
            const videoData = response.data.items.map(item => ({
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              img_url: item.snippet.thumbnails.high.url,
              channel: item.snippet.channelTitle,
              views: 'N/A',
            }));
            console.log("Fetched video data:", videoData);
            setVideos(videoData);
          } else {
            console.log("No videos found for query:", searchQuery);
            setVideos([]);
          }
        } else {
          response = await axios.get('https://yt-api-jw2k.onrender.com/api/videos');
          console.log("Fallback videos:", response.data);
          setVideos(response.data);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Error fetching videos');
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchQuery, maxResults]);  // Add maxResults as a dependency

  console.log('Loading:', loading);
  console.log('Videos:', videos);
  console.log('Error:', error);

  if (loading) {
    return <div className="feed"><p>Loading videos...</p></div>;
  }

  if (error) {
    return <div className="feed"><p>{error}</p></div>;
  }

  // Handle video click to select a video and show the iframe
  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  // Handle closing the popup
  const closePopup = () => {
    setSelectedVideoId(null);
  };

  return (
    <>
      <div className="feed">
        {videos.length > 0 ? (
          videos.map(feed => {
            console.log('Rendering video:', feed);
            return (
              <div key={feed.id} className="vid" onClick={() => handleVideoClick(feed.id)}>
                <img src={feed.img_url} alt={feed.title} className="Video-thumb" />
                <div className="Channel">
                  <div>
                    {feed.channel_img_url && (
                      <img src={feed.channel_img_url} alt={feed.channel} className="Channel-thumb" />
                    )}
                  </div>
                  <div>
                    <p className="title">{feed.title}</p>
                    <p className="info">{feed.description || 'No description available'}</p>
                    <p className="info">{feed.views || 'Views not available'}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No videos found.</p>
        )}
      </div>

      {/* Video player (popup modal) */}
      {selectedVideoId && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closePopup}>X</button>
            <iframe
              className="iframe"
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Player"
            ></iframe>
          </div>
        </div>
      )}

      <div className="end-buttons">
        <button type="button" onClick={() => setMaxResults(10)}>10</button>
        <button type="button" onClick={() => setMaxResults(20)}>20</button>
        <button type="button" onClick={() => setMaxResults(30)}>30</button>
      </div>
    </>
  );
}

export default Contents;
