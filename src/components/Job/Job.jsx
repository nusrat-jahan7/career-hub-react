import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="bg-base-100 border-2 border-purple-200 p-5">
        <figure>
          <img className="pl-8 pt-4" src={logo} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-left text-lg font-semibold">{company_name}</p>
          <div className="flex gap-3">
            <button className="btn bg-white hover:bg-purple-500 hover:text-white text-purple-500 font-bold border-2 border-purple-500">
              {remote_or_onsite}
            </button>
            <button className="btn bg-white hover:bg-purple-500 hover:text-white text-purple-500 font-bold border-2 border-purple-500">
              {job_type}
            </button>
          </div>
          <div className="flex gap-5 font-semibold py-2 text-gray-500">
            <div className="flex gap-2 items-center">
              <h3>
                <GrLocation className="text-lg"></GrLocation>
              </h3>
              <p>{location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <h3>
                <HiOutlineCurrencyDollar className="text-lg"></HiOutlineCurrencyDollar>
              </h3>
              <p>Salary : {salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link
              to={`/job-details/${id}`}
              className="btn hover:bg-purple-800 bg-purple-500 text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
