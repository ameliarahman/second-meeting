function latihan(newArray) {
  
    for (var i = 0; i < newArray.length; i++) {
      if (typeof newArray[i] === 'string') {
      
    return("This is string");
    }
      else if (typeof newArray[i] === 'number') {
    return("This is number");
    }
    }
    }
    var array = [1, 0, 'syahla', 2,2, 'latihan'];
    latihan(array);
