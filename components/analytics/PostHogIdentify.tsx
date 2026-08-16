"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

type PostHogIdentifyProps = {
  email: string;
  id: string;
  name?: string;
};

export function PostHogIdentify({ email, id, name }: PostHogIdentifyProps) {
  useEffect(() => {
    posthog.identify(id, {
      email,
      ...(name ? { name } : {}),
    });
  }, [email, id, name]);

  return null;
}
