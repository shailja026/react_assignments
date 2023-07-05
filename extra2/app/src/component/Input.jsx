import React,{useState} from 'react'

function Input() {
    const [name , setName] = useState("")
    const [age , setage] = useState("")
    const [degnation , setDegnation] = useState("")
    const [location , setLocation] = useState("")
    const [students , setStudents] = useState([])
    const  handleSubmit = (e) => {
       e.preventDefault();
       const student = {name:name,age:age,degignation:degnation,Location:location}
       setStudents([...students,student])
        setName("")
        setage("")
        setDegnation("")
        setLocation("")
    }

    
  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
        <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}
        placeholder='enter your name'/>
        <input type='Number' value={age} onChange={(e) => setage(e.target.value)} 
        placeholder='enter your age'/>
        <input type='text' value={degnation} onChange={(e) => setDegnation(e.target.value)} placeholder='enter your degignaton'/>
        <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='enter your location'/>
        <button type='submit'>submit</button>
        
    </form>
<div className='table'>
<table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Degignation</th>
            <th>Location</th>
        </tr>
        </thead>
       <tbody>
       {students.map((el,ind)=>{
    return <tr>
        <td>{el.name}</td>
        <td>{el.age}</td>
        <td>{el.degignation}</td>
        <td>{el.Location}</td>
    </tr>
})}
       </tbody>
       </table>
</div>
   
    </div>
  )
}

export default Input