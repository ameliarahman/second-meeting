function latihan(newArray) {
  
    for (var i = 0; i < newArray.length; i++) {
      if (typeof newArray[i] === 'string') {
      
    console.log("This is string");
    }
      else if (typeof newArray[i] === 'number') {
    console.log("This is number");
    }
    }
    }
    var array = [1, 0, 'syahla', 2,2, 'latihan'];
    latihan(array);