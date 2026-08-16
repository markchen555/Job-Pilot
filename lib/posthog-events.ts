export type PostHogEventProperties = {
  job_search_started: {
    job_title: string;
    location: string;
  };
  job_found: {
    match_score: number;
    source: "search";
  };
  profile_completed: Record<string, never>;
  company_researched: {
    company: string;
    job_id: string;
  };
};

export type PostHogEventName = keyof PostHogEventProperties;
