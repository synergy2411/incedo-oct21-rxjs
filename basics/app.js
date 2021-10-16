// // Sync Code
// console.log("Start")

// // MacroTask - Async
// setTimeout(() => {
//     console.log("Timer")
// },0)

// // Microtask - Async
// Promise.resolve("data").then(() => console.log("Promsie"));

// queueMicrotask(() => console.log("Micro Queue"))

// // Sync Code
// console.log("End")

// Start -> End -> Timer -> Promise


// 1. Sync Code
// 2. Async Code
    // - MicroTask -> queueMicroTask() | Promise()
    // - MacroTask -> setTimeout() | XHR Call | Obstaining the Socker | File reqd/write etc



    function display(){
        let promise = new Promise((resolve, reject) => {
            console.log("Start : Promise")
            // setTimeout(()=>{
            //     resolve("Here the data comes...")
            // }, 2000);
            setTimeout(()=>{
                resolve("Second Package")
            }, 4000);
            console.log("End : Promise")
        });
        return promise;
    }

    function demo(){
        console.log("Start")
        // display();
        display().then(response => {
            console.log(response);
        }).catch(err => console.log(err))
        console.log("End")
    }

    demo();


// Promise are chainable (then())
    // getForecast().then(coord => {
    //     return coord
    // }).then(coods => {
    //     return getWeather()
    // }).then(weatherData =>{

    // })