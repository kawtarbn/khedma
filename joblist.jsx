import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "./jobs";

export default function JobList() {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <div key={job.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
          <h3>{job.title}</h3>
          <p>Location: {job.location}</p>
          <p>Rating: {job.rating}</p>
          <Link to={`/detail/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
