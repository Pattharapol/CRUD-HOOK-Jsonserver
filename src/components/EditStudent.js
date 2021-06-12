import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditStudent = () => {
  const { id } = useParams()
  const [student, setStudent] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:8080/students/' + id)
      .then(res => res.json())
      .then(data => setStudent(data))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(student);
    fetch('http://localhost:8080/students/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student).then(() => {
        alert('Update Student SUccessfully...')
        console.log('Update Student SUccessfully...')
        history.push('/')
      })
    })
  }

  return (
    <div className='container'>
      <h3 className='center'>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Student ID : </label>
        <input type='text' id='id' value={student.id} readOnly />
        <label htmlFor='name'>Student Name : </label>
        <input
          type='text'
          id='name'
          value={student.name}
          onChange={e => setStudent({ ...student, name: e.target.value })}
        />
        <label htmlFor='age'>Student Age : </label>
        <input
          type='text'
          id='age'
          value={student.age}
          onChange={e => setStudent({ ...student, age: e.target.value })}
        />
        <label htmlFor='faculty'>Student Faculty : </label>
        <input
          type='text'
          id='faculty'
          value={student.faculty}
          onChange={e => setStudent({ ...student, faculty: e.target.value })}
        />
        <div className='center'>
          <button className='btn blue'>Update Student</button>
        </div>
      </form>
    </div>
  )
}

export default EditStudent
