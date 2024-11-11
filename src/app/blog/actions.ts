"use server";

import { z } from "zod";
import { env } from "~~/env";

export const subscribe = async (formData: FormData) => {
  const email = z.string().email().safeParse(formData.get("email"));

  if (!email.success) {
    console.error("invalid email", email.error);
    return;
  }

  const response = (await fetch("https://api.useplunk.com/v1/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.PLUNK_API_KEY}`,
    },
    body: JSON.stringify({ email: email.data, event: "user-subscribed" }),
  })) as unknown as { success: boolean };

  if (response.success) {
    return;
  }

  console.error("failed to subscribe", response);
  return;
};
