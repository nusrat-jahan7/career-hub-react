import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const allJob = useLoaderData();
  const jobId = window.location.pathname.slice(-1);
  const currentJob = allJob.find((job) => job.id === +jobId);

    const setToLocalStorage = () =>{
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        const jobExist = !!jobs.find(job => job.id === currentJob.id);

        if (jobExist) {
            toast.error('Already Applied!')
        } else {
            jobs.push(currentJob)
            localStorage.setItem('jobs', JSON.stringify(jobs))
            toast.success('Successfully Applied!')
        }
    }

    const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = currentJob;

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center py-36 bg-purple-100">
          Job Details
        </h1>
      </div>
      <div className="container my-20 mx-auto gap-6 grid grid-cols-4">       
        <div className="col-span-3">
          <h1 className="leading-8">
            <span className="text-xl font-bold">Job Description : </span>
            {job_description}
          </h1>
          <h1 className="my-5 leading-8">
            <span className="text-xl font-bold">Job Responsibility : </span>
            {job_responsibility}
          </h1>
          <h1 className="text-xl font-bold">Educational Requirements : </h1>
          <li className="my-5">{educational_requirements} </li>
          <h1 className="text-xl font-bold">Experience :</h1>
          <li className="my-5">{experiences} </li>
        </div>
        <div className="bg-purple-200 rounded-lg">
          <h1 className="text-xl p-4 border-gray-400 border-b-2 font-bold border-b-2">
            Job Details:
          </h1>
          <p className="px-4 py-3">
            <span className="text-lg font-bold ">Salary : </span>
            {salary}
          </p>
          <p className="px-4 py-2">
            <span className="text-lg font-bold ">Job Title : </span>
            {job_title}
          </p>
          <h1 className="text-xl p-4 border-gray-400 border-b-2 font-bold border-b-2">
            Contact Information
          </h1>
          <p className="px-4 py-3">
            <span className="text-lg font-bold ">Phone : </span>
            {contact_information.phone}
          </p>
          <p className="px-4 py-2">
            <span className="text-lg font-bold ">Email : </span>
            {contact_information.email}
          </p>
          <p className="px-4 py-2">
            <span className="text-lg font-bold ">Address : </span>
            {contact_information.address}
          </p>
          <button onClick={() => setToLocalStorage()} className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold w-full mx-auto mt-5">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
