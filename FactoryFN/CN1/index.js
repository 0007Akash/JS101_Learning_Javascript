
// Define function to create IPhone3 object
function IPhone3(ASIN, color, display, camera, bluetooth){
    
    // Create object with given properties
    this.ASIN = ASIN,
    this.color = color,
    this.display = display,
    this.camera = camera,
    this.bluetooth = bluetooth
    

    // Add methods to object 
    this.dial = function(){
        return "tring... tring...";
    }

    this.sendMessage = function(){
        return "Sending message...";
    }

    this.cameraClick = function(){
        return "Camera clicked";
    }

    this.connectBluetooth = function(){
        return "Bluetooth connected successfully...";
    }


    
}

// Created an object named i3
let i3 = {};

// Initializing IPhone3 propeties to i3 object using call method
IPhone3.call(i3, 2323, "Black", "Amoled", "52MP", "A1723 4.3");

// Prints the i3 Object and call it's methods
console.log(i3);
console.log(i3.dial());
console.log(i3.sendMessage());
console.log(i3.cameraClick());
console.log(i3.connectBluetooth());
