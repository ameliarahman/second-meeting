function createStudent(name, nim) {
    const student = {
      name: name,
      nim: nim
    };
    return student;
  }
  
  const studentObject = createStudent("Lisa Lia", "V3922027");
  console.log(studentObject);
