import React, {useState, useEffect} from 'react'
import Form from './components/form'
export default function App() {

  let list = [{
    name: 'Nathan',
    email: 'nathan@nathan.com',
    role: 'Frontend'
    },{
      name: 'bob',
      email: 'bob@backend.com',
      role: 'Backend'
    },{
      name: 'Jessica',
      email: 'jessica@secretary.com',
      role: 'Secratary'
    }]
const [e, setE] = useState(list)

  return (
    <div>
  
   <Form addToList={setE} />
    {e.map((e) => {
      return <h1>{e.name}</h1>
    })}
    </div>
  )
}
