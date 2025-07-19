// this is the Array Data Structure to storing the data
const studentDatabase = ["Shahid", "Ali", "john", "michel"];

// 'findStudent' that takes two parameters and this is Algorithm to find something
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};
// Call the function 'findStudent', passing in the student database
findStudent(studentDatabase, "john");
