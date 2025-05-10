import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
  <>
    <div class="card" style={{Width: '18rem',alignItems:'center'}}>
      <div className="card-body">
        <h5 className="card-title"> 404 Error- Page not Found</h5>
        <Link to="/" className="btn btn-danger">Go to Home</Link>
      </div>
    </div>
  </>
  )
}

export default NotFound