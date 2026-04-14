// TASK:
    // 1. Use 'await' with fetch() or axios.get() to get the data from the URL above.
    // 2. If using fetch(), remember you need a second 'await' for .json().
    // 3. Log the 'title' property of the result.

async function getJobDetails(){
    try{
        console.log("🚀Fetching Job details...")
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        res = await res.json()
        console.log(res.title)
    }
    catch(err){
        console.log("🤡Error: ", err.message)
    }
}
getJobDetails()
