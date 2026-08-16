import posthog from "posthog-js";

import type { PostHogEventName, PostHogEventProperties } from "@/lib/posthog-events";

export function capturePostHogEvent<EventName extends PostHogEventName>(
  event: EventName,
  properties: PostHogEventProperties[EventName],
): void {
  posthog.capture(event, properties);
}

export function resetPostHog(): void {
  posthog.reset();
}
