const breakFast = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('your order is ready!!   ');
    }, 3000);

});


console.log(breakFast);
breakFast.then(val => console.log(val))