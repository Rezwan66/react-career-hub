import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
    <div className="card card-compact bg-base-100 shadow-xl p-10">
      <figure>
        <img src={logo} alt="Company Logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-bold text-[#7E90FE] border border-[#9873FF] rounded mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-bold text-[#7E90FE] border border-[#9873FF] rounded">
            {job_type}
          </button>
        </div>
        <div className="flex my-4 gap-16">
          <h2 className="flex items-center">
            <MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>
            {location}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary capitalize bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
