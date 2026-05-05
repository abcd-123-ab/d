import { useEffect, useState } from 'react';
import List from './component/List';
import Form from './component/Form';

function App() {

  let studentData=[];
  const [students, setstudents] = useState([]);

  const addstudent = (std) => {
  const exists = students.some(
    (e) => e.roll_no === std.roll_no
  );

  if (exists) {
    alert("Employee ID already exists!");
    return;
  }

  setstudents((prev) => [...prev, std]);
};

    const deletestudent=(roll_no) =>{
      setstudents((prev) => prev.filter((std,i) => std.roll_no != roll_no));
    }

  return(
    <>
    <Form onStdAdd={addstudent}/>
    <List students={students} onStdDelete={deletestudent}/>
    </>
  );
}
export default App;