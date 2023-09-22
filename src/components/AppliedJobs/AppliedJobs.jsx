import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJob } from '../../utility/localstorage';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const jobs = useLoaderData();

  const handleFilter = filter => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    } else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(
        job => job.remote_or_onsite.toLowerCase() === 'remote'
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(
        job => job.remote_or_onsite.toLowerCase() === 'onsite'
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJob();
    if (jobs.length) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      // another way
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      // console.log(jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="text-2xl text-center">
        Jobs I applied to: {appliedJobs.length}
      </h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">Filter by</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul className="list-decimal">
        {displayJobs.map(job => (
          <li key={job.id}>
            <span>
              {job.job_title} --- {job.company_name} --- {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
