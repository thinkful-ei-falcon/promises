let completed = false;

function turnOnComputer(os) {
      if (os === "Windows") {
        return Promise.resolve({ message: "Yay you are using windows", completed: true });
      } else {
        return Promise.reject({
          message: "Oh no, what OS are you using???",
          completed: false,
        });
      }  
}

console.log("Turning on your computer...");

turnOnComputer("Linux")
  .then((result) => {
    if (result.completed) {
      console.log(result.message);
    } 
  })
  .catch((err) => 
  {
   console.log(err);
     console.log('Program complete')

  });

