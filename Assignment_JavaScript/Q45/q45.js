/*
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function informationAboutCar(model,manufacturer,{...arg}){
    
    let info={
        Car_Model: model,
        Car_Manufacturer:manufacturer,
    }
    let keys = Object.keys(arg);
    keys.map((item,index) => {
        info[`${item}`] = arg[keys[index]]
    })
    return info;
};
let abc=informationAboutCar(2004,"benze",{country:"USA",Color:"Black"});
console.log(abc);


