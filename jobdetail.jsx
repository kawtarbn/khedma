import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "./jobs";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div>
      <Link to="/">← Back to Listings</Link>
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Date: {job.date}</p>
      <p>Rating: {job.rating}</p>
      <p>Description: {job.desc}</p>
      <p>Posted by: {job.author}</p>
      <p>Contact: {job.contact}</p>
    </div>
  );
}
