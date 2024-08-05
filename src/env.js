import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    YOUTUBE_API_KEY: z.string(),
    YOUTUBE_UPLOADS_PLAYLIST_ID: z.string(),
    YOUTUBE_VIDEO_IDS: z
      .string()
      .transform((val) => val.split(",").map((id) => id.trim())),
    REDIS_URL: z.string(),
    REDIS_TOKEN: z.string(),
    POSTMARK_API_TOKEN: z.string().min(1),
    SMTP_FROM: z.string().min(1),
    POSTMARK_WELCOME_TEMPLATE_ID: z.string().min(1),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_UPLOADS_PLAYLIST_ID: process.env.YOUTUBE_UPLOADS_PLAYLIST_ID,
    YOUTUBE_VIDEO_IDS: process.env.YOUTUBE_VIDEO_IDS,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_TOKEN: process.env.REDIS_TOKEN,
    POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
    SMTP_FROM: process.env.SMTP_FROM,
    POSTMARK_WELCOME_TEMPLATE_ID: process.env.POSTMARK_WELCOME_TEMPLATE_ID,

    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
