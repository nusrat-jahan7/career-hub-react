import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-20 mb-10">
      <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
      <p className="text-center py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="grid grid-cols-2 container mx-auto gap-5 my-10">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className="text-center">
        <button className="btn hover:bg-purple-800 bg-purple-500 text-white">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
