import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    age: '',
    faculty: ''
  })

  const history = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    }).then(() => {
      console.log('Student has been added Successfully...')
      alert('Student has been added Successfully...')
      history.push('/')
    })
  }

  return (
    <div className='container'>
      <h3 className='center'>AddStudent.JS</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Student ID :</label>
        <input
          type='text'
          id='id'
          onChange={e => setStudent({ ...student, id: e.target.value })}
          value={student.id}
        />
        <label htmlFor='name'>Student Name :</label>
        <input
          type='text'
          id='name'
          onChange={e => setStudent({ ...student, name: e.target.value })}
          value={student.name}
        />
        <label htmlFor='age'>Student Age :</label>
        <input
          type='text'
          id='age'
          onChange={e => setStudent({ ...student, age: e.target.value })}
          value={student.age}
        />
        <label htmlFor='faculty'>Student Faculty :</label>
        <input
          type='text'
          id='faculty'
          onChange={e => setStudent({ ...student, faculty: e.target.value })}
          value={student.faculty}
        />
        <div className='center'>
          <button className='blue btn'>Add Student</button>
        </div>
      </form>
    </div>
  )
}

export default AddStudent
