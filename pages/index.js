import { NextSeo } from 'next-seo';
import defaultSEO from '../seo.config.js';
import React, { useState } from "react"; // Import React and useState here
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          <center>Youtube Thumbnail Downloader</center>
        </h1>
        <p className="text-gray-600" align="center">
          Youtube thumbnail Grabber.
        </p>
        <p className="text-gray-600" align="center">
          Download Youtube Thumbnail.
        </p>
        <p className="text-gray-600" align="center">
          You will find the pictures below.
        </p>
      </header>
      <div className="text-center">
        <div className="flex items-center justify-center"> {/* Use flex container */}
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border rounded"
            placeholder="Enter YouTube URL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button
            className="btn-blue ml-2"
            onClick={() => getYouTubeThumbnail(videoURL)}
          >
            Download Thumbnails
          </button>
        </div>
        <div className="mt-4 text-gray-600 text-left">
          {/* ... (rest of the code) */}
        </div>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* ... (rest of the code) */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
