"use client";

import { useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `/api/jobs?query=${encodeURIComponent(
        query
      )}&location=${encodeURIComponent(location)}`
    );
    const data = await res.json();
    setJobs(data.jobs || []);
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Keyword"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {jobs.map((job, idx) => (
          <li key={idx}>
            {job.title} - {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
