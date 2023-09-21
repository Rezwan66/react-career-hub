import PropTypes from 'prop-types';

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
    <div className="card card-compact bg-base-100 shadow-xl">
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
        <div className="card-actions justify-start">
          <button className="btn btn-primary capitalize bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
