function List({students,onStdDelete}){
    return (
        <>
        <h1>Student </h1>
        <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((std) => (
            <tr key={std.roll_no}>
              <td>{std.roll_no}</td>
              <td>{std.name}</td>
              <td>{std.age}</td>
              <td>{std.marks}</td>
              <td>
                <button onClick={() => onStdDelete(std.roll_no)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default List;