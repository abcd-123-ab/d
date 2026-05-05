import { useState } from "react";

function Form({onStdAdd}){
    const[roll_no,setRoll_no]=useState('');
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[marks,setMarks]=useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

if (!roll_no || !name || !age || !marks) {
  alert("Please fill all fields");
  return;
  
}


    onStdAdd({ roll_no, name, age, marks });

    setRoll_no('');
    setName('');
    setAge('');
    setMarks('');
};


return (
    <>
     <h1>Add Student</h1>
    <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <label>roll_no:</label>
                    </td>
                    <td>
                        <input name="roll_no" value={roll_no} onChange={(e) => setRoll_no(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>name:</label>
                    </td>
                    <td>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                     <td>
                        <label>age:</label>
                    </td>
                    <td>
                        <input name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                     <td>
                        <label>marks:</label>
                    </td>
                    <td>
                        <input type="text" name="marks" value={marks} onChange={(e) => setMarks(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                     <td>
                        &nbsp;
                    </td>
                    <td>
                        <button type="submit">ADD</button>
                    </td>
                </tr>
            </tbody>    
        </table>
     </form>
    </>  
);   
}; 

export default Form;