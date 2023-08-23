import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Youtube Thumbnail Downloader."
        canonical="https://youtubethumbgrabber.com"
        openGraph={{
          url: "https://youtubethumbgrabber.com",
          title: "Download Youtube Thumbnail",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Grabber",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
