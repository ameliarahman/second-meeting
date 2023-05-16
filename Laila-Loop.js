function loop(dataArray){
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        
        if (typeof data === "number") {
          console.log("This is a number");
        } else if (typeof data === "string") {
          console.log("This is a string");
        } else if (typeof data === "object") {
          console.log("This is an object");
        }
      }

}


loop([1, 2, 3, "Amelia", {
    name: "Amelia",
    favoriteNumber: 1
  }]);
