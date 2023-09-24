const AppliedJobs = () => {

    // const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    console.log(JSON.parse(localStorage.getItem('jobs')));

    return (
        <div>
            <h1 className="text-4xl">This is Applied Jobs Page</h1>
        </div>
    );
};

export default AppliedJobs;