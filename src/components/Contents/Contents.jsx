import { useEffect, useState } from 'react';
import axios from 'axios';
import './Contents.css';

function Contents({ searchQuery }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyDoO5fm_qVrxdf7lDBi7c921LfJT71HoiU';
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;

        console.log("Fetching videos for query:", searchQuery);  // Debugging log for searchQuery

        if (searchQuery.trim()) {
          const params = {
            part: 'snippet',
            q: searchQuery,
            key: API_KEY,
            type: 'video',
          };

          response = await axios.get(YOUTUBE_API_URL, { params });

          console.log("API Response:", response);  // Log the full API response for debugging

          if (response.data.items && response.data.items.length > 0) {
            const videoData = response.data.items.map(item => ({
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              img_url: item.snippet.thumbnails.high.url,
              channel: item.snippet.channelTitle,
              views: 'N/A',
            }));
            console.log("Fetched video data:", videoData);  // Log the video data
            setVideos(videoData);
          } else {
            console.log("No videos found for query:", searchQuery);
            setVideos([]);  // No results, set videos to an empty array
          }
        } else {
          response = await axios.get('https://yt-api-jw2k.onrender.com/api/videos');
          console.log("Fallback videos:", response.data);  // Log the fallback data
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
  }, [searchQuery]);

  console.log('Loading:', loading);
  console.log('Videos:', videos);
  console.log('Error:', error);

  if (loading) {
    return <div className="feed"><p>Loading videos...</p></div>;
  }

  if (error) {
    return <div className="feed"><p>{error}</p></div>;
  }

  return (
    <div className="feed">
      {videos.length > 0 ? (
        videos.map(feed => {
          console.log('Rendering video:', feed);  // Log each video feed to check its structure
          return (
            <div key={feed.id} className="vid">
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
  );
}

export default Contents;
