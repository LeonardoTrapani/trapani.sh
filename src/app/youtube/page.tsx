import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { env } from "~~/env";
import {
  YoutubeComponentProps,
  YoutubeVideoItem,
  youtubeVideoItemsToComponentProps,
  YoutubeVideoPlaylistItem,
  youtubeVideoPlaylistItemsToComponentProps,
} from "~~/lib/youtube";

export const metadata: Metadata = {
  title: "Youtube",
  description:
    "All of Leonardo Trapani's videos in one place. Watch tutorials, vlogs, and more.",
  keywords: [
    "Leonardo Trapani",
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

export default async function YoutubePage() {
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${env.YOUTUBE_UPLOADS_PLAYLIST_ID}&maxResults=50&key=${env.YOUTUBE_API_KEY}`;

  const playlistResponse = await fetch(playlistUrl);

  if (!playlistResponse.ok) {
    throw new Error("Failed to fetch videos from YouTube.");
  }

  const playlistResponseJson = await playlistResponse.json();
  const playlistVideos =
    playlistResponseJson.items as YoutubeVideoPlaylistItem[];

  const externalYoutubeVideos = await Promise.all(
    env.YOUTUBE_VIDEO_IDS.map(async (videoId) => {
      const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${env.YOUTUBE_API_KEY}`;
      const videoResponse = await fetch(videoUrl);

      if (!videoResponse.ok) {
        throw new Error("Failed to fetch videos from YouTube.");
      }

      const videoResponseJson = await videoResponse.json();
      return videoResponseJson.items[0] as YoutubeVideoItem;
    }),
  );

  const videos: YoutubeComponentProps[] = [
    ...youtubeVideoPlaylistItemsToComponentProps(playlistVideos),
    ...youtubeVideoItemsToComponentProps(externalYoutubeVideos),
  ].sort(
    (a: YoutubeComponentProps, b: YoutubeComponentProps) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  if (!videos.length) {
    throw new Error("No videos found");
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        youtube (it)
      </h1>

      <div className="grid flex-col gap-8 md:grid-cols-2">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            className="group"
          >
            <div className="flex w-full flex-col gap-y-1">
              <Image
                src={video.thumbnail.url}
                alt={video.title}
                width={video.thumbnail.width}
                height={video.thumbnail.height}
                className="w-full"
              />
              <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
                {video.title}
              </p>
              <p className="gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                {video.channelTitle.toLowerCase()}
                {" • "}
                {new Date(video.publishedAt)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toLowerCase()}
              </p>
              <p className="prose prose-neutral line-clamp-3 dark:prose-invert">
                {video.description.toLowerCase()}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
