

// Define a function to create iPhone1 objects
function iPhone1(ASIN,color,display,camera){
    // Create an object with the given properties
    let obj = {
        ASIN,
        color,
        display,
        camera
    }

    // Add methods to the object
    obj.dial = function(){
        return "tring... tring...";
    }

    obj.sendMessage = function(){
        return  "Sending message...";
    }

    obj.cameraClick = function(){
        return "Camera clicked";
    }
    // Return the object
    return obj;
}

// Create an iPhone1 object and store it in variable i1
let i1 = iPhone1(222,"Black", "Amoled", "52MP");

// Print the iPhone1 object and call it's methods
console.log(i1);
console.log(i1.dial());
console.log(i1.sendMessage());
console.log(i1.cameraClick());


// Define a function to create iPhone2 object 
function iPhone2(ASIN,color,display,camera,bluetooth){
    // Create an object with given properties
    let obj = {
        ASIN,
        color,
        display,
        camera,
        bluetooth
    }
    // Add methods to the object
    obj.dial = function(){
        return "tring... tring...";
    }

    obj.sendMessage = function(){
        return  "Sending message...";
    }

    obj.cameraClick = function(){
        return "Camera clicked";
    }

    obj.connectBluetooth = function(){
        return "Bluetooth connected successfully...";
    }
    // Return the object
    return obj;
}

// Create iPhone2 object and store it in variable i2
let i2 = iPhone2(222,"Black", "Amoled", "52MP","A1723 4.2");

// Print iPhone2 object and call it's methods
console.log(i2);
console.log(i2.dial());
console.log(i2.sendMessage());
console.log(i2.cameraClick());
console.log(i2.connectBluetooth());