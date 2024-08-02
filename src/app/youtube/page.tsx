import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { env } from "~~/env";

export const metadata: Metadata = {
  title: "Youtube",
  description:
    "All of Leonardo Trapani's videos in one place. Watch tutorials, vlogs, and more.",
  keywords: [
    "youtube",
    "tutorials",
    "vlogs",
    "full stack",
    "software development",
    "technologies",
    "nextjs",
  ],
  openGraph: {
    images: [
      {
        url: "https://leotrapani.com/og/home?title=leonardo trapani's youtube videos",
      },
    ],
  },
};

interface YoutubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
}

export default async function YoutubePage() {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${env.YOUTUBE_UPLOADS_PLAYLIST_ID}&maxResults=50&key=${env.YOUTUBE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch videos from YouTube.");
  }

  const videos = await response.json();

  if (!videos.items.length) {
    throw new Error("No videos found");
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        youtube (it)
      </h1>

      <div className="grid flex-col gap-8 md:grid-cols-2">
        {videos.items.map((video: YoutubeVideo) => (
          <Link
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            className="group"
          >
            <div className="flex w-full flex-col gap-y-1">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={video.snippet.thumbnails.medium.width}
                height={video.snippet.thumbnails.medium.height}
                className="w-full"
              />
              <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
                {video.snippet.title.toLowerCase()}
              </p>
              <p className="prose prose-neutral dark:prose-invert">
                {video.snippet.description.toLowerCase()}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {new Date(video.snippet.publishedAt)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toLowerCase()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
