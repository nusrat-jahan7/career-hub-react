import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDatalength] = useState(4);


  useEffect(() => {
    fetch("public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-16 mb-10 text-center">
      <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
      <p className="text-center py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="grid grid-cols-2 container mx-auto gap-5 my-10">
        {jobs.slice(0,datalength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={datalength === jobs.length && 'hidden'}>         
        <button onClick={() => setDatalength(jobs.length)} className="btn hover:bg-purple-800 bg-purple-500 text-white text-center">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
