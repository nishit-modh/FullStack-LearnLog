const axios = require("axios")

async function fetchUser() {
    try{
        let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        console.log("🚀Success: ", response.data.name); 
    }
    catch(err){
        console.log("😭Error: ",err.message)
    }
}

fetchUser();
