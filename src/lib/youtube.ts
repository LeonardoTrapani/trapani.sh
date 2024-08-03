export interface YoutubeVideo {
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

export const externalYoutubeVideos: YoutubeVideo[] = [
  {
    kind: "youtube#playlistItem",
    etag: "deoQMOg-Y1gtMW2WSbWsNnnHH1M",
    id: "VVVLc3NaRUFSaEs3VFRfNURFWm10TXB3LlZZd0N0SjQwSF9V",
    snippet: {
      publishedAt: "2024-07-31T13:28:45Z",
      channelId: "UCKssZEARhK7TT_5DEZmtMpw",
      title:
        "Le tecnologie più MODERNE per un DEVELOPER - La Tech Stack per qualunque applicazione",
      description:
        "In questo video mostreremo una delle tech stack più attuali mostrando moltissime tecnologie moderne.\n\nSe volete andare più nel dettaglio su tutte le tecnologie e come funzionano, vi lasciami il blog post di Leo: https://leotrapani.com/blog/ultimate-stack\n\nEcco le documentazioni delle tecnologie di cui abbiamo parlato sopra:\nhttps://create.t3.gg/\nhttps://youtube.com/@t3dotgg\nhttps://nextjs.org/\nhttps://trpc.io/\nhttps://www.prisma.io/\nhttps://orm.drizzle.team/\nhttps://tailwindcss.com/\nhttps://www.radix-ui.com/\nhttps://ui.shadcn.com/\nhttps://vercel.com/\n\nEsplora i lavori Tech selezionati per te (RAL in chiaro)👇🏼\nhttps://jobs.datapizza.tech\n\nSegui Datapizza sui Social 👇🏼\n\nLa nostra Newsletter: https://datapizza.tech/#newsletter \nMappa dei Salari: https://salaries.datapizza.tech/\n\nInstagram: https://instagram.com/datapizza\nLinkedIn: https://it.linkedin.com/company/datapizza\nCommunity Discord:  https://discord.gg/dSuzVbkZFy\nSpotify Podcast: https://open.spotify.com/show/6TMBvIx2tWVA8AEPDU027j?si=f08025f720884068",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VYwCtJ40H_U/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VYwCtJ40H_U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VYwCtJ40H_U/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/VYwCtJ40H_U/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/VYwCtJ40H_U/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Datapizza",
      playlistId: "UUKssZEARhK7TT_5DEZmtMpw",
      position: 1,
      resourceId: {
        kind: "youtube#video",
        videoId: "VYwCtJ40H_U",
      },
      videoOwnerChannelTitle: "Datapizza",
      videoOwnerChannelId: "UCKssZEARhK7TT_5DEZmtMpw",
    },
  },
];
