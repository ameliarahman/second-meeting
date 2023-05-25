function createStudent(name, nim) {
    const student = {
      name: name,
      nim: nim
    };
    return student;
  }
  
  const studentObject = createStudent("Maharrani Syah", "V3922028");
  console.log(studentObject);