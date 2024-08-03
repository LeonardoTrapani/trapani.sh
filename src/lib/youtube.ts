export interface YoutubeVideoPlaylistItem {
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
  videoOwnerChannelTitle?: string;
  videoOwnerChannelId?: string;
}

export interface YoutubeVideoItem {
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
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localised: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
}

export const youtubeVideoItemsToComponentProps = (
  videos: YoutubeVideoItem[],
): YoutubeComponentProps[] => {
  return videos.map((video) => ({
    description: video.snippet.description,
    id: video.id,
    publishedAt: video.snippet.publishedAt,
    thumbnail: { ...video.snippet.thumbnails.maxres },
    title: video.snippet.title,
    channelTitle: video.snippet.channelTitle,
  }));
};

export const youtubeVideoPlaylistItemsToComponentProps = (
  videos: YoutubeVideoPlaylistItem[],
): YoutubeComponentProps[] => {
  return videos.map((video) => ({
    description: video.snippet.description,
    id: video.snippet.resourceId.videoId,
    publishedAt: video.snippet.publishedAt,
    thumbnail: {
      url: `https://i.ytimg.com/vi/${video.snippet.resourceId.videoId}/maxresdefault.jpg`,
      width: 1280,
      height: 720,
    },
    title: video.snippet.title,
    channelTitle: video.snippet.channelTitle,
  }));
};

export interface YoutubeComponentProps {
  publishedAt: string;
  id: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  channelTitle: string;
  description: string;
}
