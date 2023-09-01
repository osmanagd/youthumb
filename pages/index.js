import { useState } from "react";
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
	  	 <!-- Description and Keywords (start) -->
  
<p dir="auto" data-pm-slice="1 1 []"><strong>Keywords:</strong></p>
<p dir="auto">YouTube thumbnail downloader, YouTube thumbnail retrieval, YouTube video thumbnail generator, YouTube video thumbnail grabber, YouTube thumbnail grabber,thumbnail grabber, thumbnail generator, YouTube thumbnail downloader, extract YouTube video thumbnails, store YouTube video thumbnails, download YouTube video thumbnails, capture YouTube video thumbnails, grab YouTube video thumbnails, save YouTube video thumbnails, retrieve YouTube video thumbnails, get YouTube video thumbnails, efficient YouTube thumbnail tool, easy YouTube thumbnail retrieval</p>
<p dir="auto"><strong>Related questions:</strong></p>
<p dir="auto">How can I retrieve a thumbnail image from a YouTube video? What is the best tool for downloading YouTube video thumbnails? How do I save a thumbnail from a YouTube video? Is there a way to easily extract and store YouTube video thumbnails? Can you recommend an efficient tool for grabbing thumbnails of YouTube videos?</p>
<p dir="auto">&mdash;</p>
<p dir="auto"><strong>Keywords:</strong></p>
<p dir="auto">YouTube thumbnail images, retrieve YouTube video thumbnails, store YouTube video thumbnails, YouTube thumbnail downloader, efficient YouTube thumbnail retrieval, YouTube thumbnail generator, extract YouTube video thumbnails, save YouTube video thumbnails, download YouTube video thumbnails, obtain YouTube video thumbnails, fetch YouTube thumbnail images, capture YouTube video thumbnails, efficient thumbnail retrieval tool, retrieve and store YouTube video thumbnails</p>
<p dir="auto"><strong>Related questions:</strong></p>
<p dir="auto">How can I retrieve thumbnail images of YouTube videos? What is the most efficient way to store YouTube video thumbnails? Is there a specific tool to download and save YouTube video thumbnails? How can I extract and save thumbnails from YouTube videos? What is the best method to obtain thumbnail images of YouTube videos? How do I capture and store thumbnail images of YouTube videos? Is there a way to automatically generate thumbnail images for my YouTube videos?</p>
<p dir="auto">&mdash;</p>
<p dir="auto"><strong>Keywords:</strong></p>
<p dir="auto">YouTube thumbnail image retrieval, YouTube video thumbnail downloader, extract YouTube video thumbnails, YouTube video thumbnail grabber, download YouTube video thumbnails, save YouTube video thumbnails, get YouTube video thumbnail URL, YouTube thumbnail image storage, YouTube thumbnail grabber tool, efficient YouTube thumbnail retrieval</p>
<p dir="auto"><strong>Related questions:</strong></p>
<p dir="auto">How do I retrieve the thumbnail image of a YouTube video? Can you explain the process of storing YouTube video thumbnails? Is there a tool to quickly download YouTube video thumbnails? How can I save the thumbnail of a specific YouTube video? What is the best method to grab the thumbnail image of a YouTube video?</p> 
  
 <!-- Description and Keywords (start) -->
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
