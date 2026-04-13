const jobListings = [
    { title: "Frontend Developer", salary: 60000, location: "Ahmedabad", remote: false },
    { title: "Node.js Architect", salary: 95000, location: "Remote", remote: true },
    { title: "React Intern", salary: 15000, location: "Ahmedabad", remote: false },
    { title: "Backend Engineer", salary: 120000, location: "Bangalore", remote: true },
    { title: "UI/UX Designer", salary: 45000, location: "Ahmedabad", remote: false }
];

// --- YOUR TASK ---
// 1. Create a variable 'remoteJobs' using .filter() to find all jobs where remote is true.

const remoteJobs = jobListings.filter(type => type.remote === true)
console.log(remoteJobs)
remoteJobs.forEach(job => console.log(job.title)) // titles only

// 2. Create a variable 'jobCards' using .map() that turns the 'remoteJobs' array 
//    into an array of strings: "TITLE ($SALARY) - LOCATION"

const jobsInfo = remoteJobs.map(job => `${job.title} (${job.salary}) - ${job.location}`)
console.log(jobsInfo)

// 3. (Advanced) Use .reduce() to calculate the total combined salary of all jobs in Ahmedabad.

const totalSal = jobListings.filter(job => job.location === "Ahmedabad").map(job => job.salary).reduce((total, sal) => total + sal, 0)
console.log(totalSal)
