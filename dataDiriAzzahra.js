function dataDiri(name, nim) {
  var student = {
    name: name,
    nim: nim
  };

  console.log(student);
}

// Contoh pemanggilan fungsi
var name = "Azzahra Kareena Rendriputri";
var nim = "V3922009";

dataDiri(name, nim);

console.log(dataDiri.length)

for(let i = 0; i < dataDiri.length; i++){
    console.log("index---:",i)
    console.log(dataDiri(i)
    //code..
    )
}