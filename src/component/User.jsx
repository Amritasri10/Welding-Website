import React, { useEffect} from 'react'
import { useState } from 'react'
function User() {
    const[data, setData] = useState([])
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setData(json))  
    .catch(err => console.log(err))
   },[]) 
  return (
    <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {data.map((v,i) => (
      <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{v.name}</td>
        <td>{v.email}</td>
        <td>{v.address.city}</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default User