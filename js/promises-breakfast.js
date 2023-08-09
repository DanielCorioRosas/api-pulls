const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('your order is ready!!');
    }, 3000);

});


console.log(breakfastPromise);
breakfastPromise.then(val => console.log(val))