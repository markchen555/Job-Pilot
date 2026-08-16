import { PostHog } from "posthog-node";

import type { PostHogEventName, PostHogEventProperties } from "@/lib/posthog-events";

let posthog: PostHog | null = null;

function getPostHogServer(): PostHog | null {
  const projectToken =
    process.env.POSTHOG_KEY ??
    process.env.NEXT_PUBLIC_POSTHOG_KEY ??
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.POSTHOG_HOST ?? process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!projectToken || !host) {
    return null;
  }

  if (!posthog) {
    posthog = new PostHog(projectToken, {
      flushAt: 1,
      flushInterval: 0,
      host,
    });
  }

  return posthog;
}

export async function capturePostHogServerEvent<EventName extends PostHogEventName>(
  distinctId: string,
  event: EventName,
  properties: PostHogEventProperties[EventName],
): Promise<void> {
  const client = getPostHogServer();

  if (!client) {
    return;
  }

  client.capture({ distinctId, event, properties });
  await client.flush();
}
