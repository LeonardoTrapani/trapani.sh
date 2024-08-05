"use server";

import { z } from "zod";
import { env } from "~~/env";
import { postmarkClient } from "~~/lib/postmark";

export const subscribe = async (formData: FormData) => {
  const email = z.string().email().safeParse(formData.get("email"));

  const result = await postmarkClient.sendEmailWithTemplate({
    TemplateId: parseInt(env.POSTMARK_WELCOME_TEMPLATE_ID),
    To: email.data,
    From: env.SMTP_FROM,
    TemplateModel: {},
    Headers: [
      {
        // Set this to prevent Gmail from threading emails.
        // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
        Name: "X-Entity-Ref-ID",
        Value: new Date().getTime() + "",
      },
    ],
  });

  if (result.ErrorCode) {
    return { error: "failed to subscribe", success: false };
  }

  return { success: true };
};
