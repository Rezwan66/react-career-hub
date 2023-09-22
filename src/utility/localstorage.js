const getStoredJob = () => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs-applied'));
    if (storedJobs) {
        return storedJobs;
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobs = getStoredJob();
    const exists = storedJobs.find(jobId => jobId === id);
    if (!exists) {
        storedJobs.push(id);
        localStorage.setItem('jobs-applied', JSON.stringify(storedJobs))
    }
}

export { getStoredJob, saveJobApplication }