import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollar } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  const {
    contact_information,
    job_title,
    salary,
    educational_requirements,
    experiences,
    job_description,
    job_responsibility,
  } = job;
  // console.log(job);
  const handleApply = () => {
    saveJobApplication(idInt);
    toast('You have applied successfully !');
  };
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">Job Details</h2>
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-3">
          <p>Job Description: {job_description}</p>
          <p>Job Responsibility: {job_responsibility}</p>
          <p>Educational Requirements: {educational_requirements}</p>
          <p>Experiences: {experiences}</p>
        </div>
        <div>
          <h3>Job Details</h3>
          <hr />
          <h2 className="flex items-center">
            <AiOutlineDollar className="text-2xl mr-2 text-[#9873FF]"></AiOutlineDollar>
            Salary: {salary}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollar className="text-2xl mr-2 text-[#9873FF]"></AiOutlineDollar>
            Job Title: {job_title}
          </h2>
          <h3>Contact Information</h3>
          <hr />
          <h2 className="flex items-center">
            <AiOutlineDollar className="text-2xl mr-2 text-[#9873FF]"></AiOutlineDollar>
            Phone: {contact_information.phone}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollar className="text-2xl mr-2 text-[#9873FF]"></AiOutlineDollar>
            Email: {contact_information.email}
          </h2>
          <h2 className="flex items-center">
            <MdOutlineLocationOn className="text-2xl mr-2 text-[#9873FF]"></MdOutlineLocationOn>
            {contact_information.address}
          </h2>
          <Link>
            <button
              onClick={handleApply}
              className="btn btn-primary w-full capitalize bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
