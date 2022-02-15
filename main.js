	
const turnOnComputer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const message = "Welcome to Linux!";
        if (message === "Welcome to Windows!") {
            resolve("Welcome to Windows!");
        } else {
            reject("Technical Error!");
        }
    }, 2500);
})
 
turnOnComputer.then((result) => {
    console.log("Success: ", result);
   }).catch((error)=>{
    console.log("Failure: ",error)
});