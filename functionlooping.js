function tugas2(newArray) {
  for (var i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === "string") {
      console.log(" This is string");
    } else if (typeof newArray[i] === "number") {
      console.log(" This is number");
    } else if (typeof newArray[i] === "object") {
      if (Array.isArray(newArray[i])) {
        console.log("This is Array, not obj");
      } else {
        console.log(newArray[i] + " this is object");
      }
    }
  }
}
