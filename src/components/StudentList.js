import { Link } from 'react-router-dom'

const StudentList = props => {
  const { students } = props
  // console.log(students);
  return (
    <div className=' container center'>
      <h3>StudentList.JS</h3>
      <div className='row'>
        {students.map(std => (
          <div className='col s4' key={std.id}>
            <div className='card'>
              {/* <Link to={"students/"+std.id}> */}
              <Link to={`/students/${std.id}`}>
                <div className='card-content'>
                  <p>{std.name}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentList
