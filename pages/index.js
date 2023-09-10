// pages/index.js
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
        <div className="mt-4 text-gray-600 text-left">
          <p><strong>You will find the pictures below.</strong></p>
          <p><strong>YouTube Thumbnail Downloader Supports All YouTube Videos Including 8K, 4K, 1080p, HD, HQ, etc.</strong></p>
          <p><strong>YouTube Thumbnail Downloader - Download YouTube Thumbnails.</strong></p>
          <p><strong>This YouTube Thumbnail Grabber is a free online tool, with the help of this YouTube Thumbnail Grabber you can easily Download YouTube Video Thumbnail in different sizes and qualities.
          .</strong></p>
          <p><strong>What is a YouTube Thumbnail Grabber?</strong></p>
          <p>YouTube allows channel owners to post all types of engaging videos content and let you watch it. But, when it comes to the thumbnails, you are not able to zoom out or download them. With our YouTube Thumbnail Grabber, you can view full-size thumbnail images in their original quality and save them to your devices. The downloader is free and only requires you to enter a video link for the magic to happen.
          </p>
          <p><strong>How do I download a YouTube thumbnail?</strong></p>
          <ol>
            <li>Copy the Required YouTube Video URL/Link from the YT Website or App.</li>
            <li>Paste the YouTube video Link/URL in the Given Input Box.</li>
            <li>Click on the "Download YouTube Thumbnail" Button.</li>
            <li>You will get a list of all the available YT Video Thumbnail Qualities, which you can choose from:</li>
            <ul>
              <li>High Quality (HQ)</li>
              <li>High Definition (HD)</li>
              <li>4K</li>
              <li>720p</li>
              <li>1080p Thumbnail</li>
              <li>Low Quality</li>
              <li>Medium Quality</li>
            </ul>
            <li>Click on the Download Button for the desired result, and your YT Video Thumbnail will be Downloaded to your Device's Storage.</li>
          </ol>
        </div>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
