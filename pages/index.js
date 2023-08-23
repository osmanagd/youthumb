import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    // ... (your existing code for fetching thumbnails)
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">YouTube Thumbnail Downloader</h1>
		<p className="text-gray-600" align="center">
          Youtube thumbnail Grabber.
        </p>
		<p className="text-gray-600" align="center">
          Download Youtube Thumbnail.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
        <p className="text-gray-600 mt-4" align="center">
          YouTube Thumbnail Downloader Supports All YouTube Videos Including 8K, 4K, 1080p, HD, HQ, etc.
        </p>
        <p className="text-gray-600" align="center">
          YouTube Thumbnail Downloader - Download YouTube Thumbnails
        </p>
        <p className="text-gray-600" align="center">
          This YouTube Thumbnail Grabber is a free online tool, with the help of this YouTube Thumbnail Grabber you can easily Download YouTube Video Thumbnail in different sizes and qualities.
        </p>
		<p className="text-gray-600" align="center">
        YouTube allows channel owners to post all types of engaging videos content and let you watch it. But, when it comes to the thumbnails, you are not able to zoom out or download them. With our YouTube Thumbnail Grabber, you can view full-size thumbnail images in their original quality and save them to your devices. The downloader is free and only requires you to enter a video link for the magic to happen.
        </p>
		<p className="text-gray-600" align="center">
		How do I download a YouTube thumbnail?
        </p>
	<p className="text-gray-600" align="center">
		1. Copy the Required YouTube Video URL/ Link from YT Website or App.
        </p>
		<p className="text-gray-600" align="center">
		2. Paste the Youtube video Link / URL in the Given Input Box.
        </p>
		<p className="text-gray-600" align="center">
		3. Now Click on the "Download Youtube Thumbnail" Button.
        </p>
		<p className="text-gray-600" align="center">
		4. After That You will get a list of all The Available YT Video Thumbnail Qualities, Which you can Choose From High Quality(HQ),
High Definition (HD), 4K, 720p, 1080p Thumbnail, Low Quality and Medium Quality YT Thumbnails are also available.
        </p>
		<p className="text-gray-600" align="center">
		5. Click on the Download Button Which result you want, and Your YT Video Thumbnail will be Downloaded in your Devices Storage.
        </p>
		
      </div>
      {/* Rest of your code remains the same */}
    </div>
  );
};

export default Index;
