import { method } from 'lodash'
import { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

const StudentDetails = () => {
  const [student, setStudent] = useState(null)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:8080/students/' + id)
      .then(response => response.json())
      .then(data => setStudent(data))
  }, [])

  const handleDelete = () => {
    fetch('http://localhost:8080/students/' + id, {
      method: 'DELETE'
    }).then(() => {
      alert('Delete Student Successfully...')
      console.log('Delete Student Successfully...')
      history.push('/')
    })
  }

  return (
    <div className='container'>
      <h3 className='center'>Student Details</h3>
      {student && (
        <div className='card'>
          <div className='card-content'>
            <div className='center'>
              <p>Student ID : {student.id}</p>
              <p>Student Name : {student.name}</p>
              <p>Student Age : {student.age}</p>
              <p>Student Faculty : {student.faculty}</p>
            </div>
          </div>
          <div className='card-action'>
            <div className='center'>
              <Link className='green btn' to={"/editstudent/" + student.id}>Edit</Link>

              <button className='red btn' onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentDetails
