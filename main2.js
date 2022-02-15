let completed = false;

function turnOnComputer(os) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (os === "Windows") {
        resolve({ message: "Yay you are using windows", completed: true });
      } else {
        reject({
          message: "Oh no, what OS are you using???",
          completed: false,
        });
      }
    }, 2500);
  });
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

