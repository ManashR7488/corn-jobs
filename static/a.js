
const btn = document.querySelector(".strBtn")

btn.addEventListener("click",async ()=>{
    try {
        const responce = await axios.get("https://corn-jobs.onrender.com")
        console.log(responce);
    } catch (error) {
        console.log("Error in github Self ping :", error.message)
    }
})