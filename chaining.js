function story(os) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('I came home from school');
      }, 1000);
    });
  }


  story().then(result=>{
    console.log(result);
    return 'I started my homework';
  }).then(result=>{
      console.log(result);
      return 'and then I fell asleep';
  }).then(result=>console.log(result));