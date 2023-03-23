import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
export default function UsersError() {
    
    const error = useRouteError();
  return (
    <div>
        <h2>Error</h2>
        <p>{error.data}</p>
        <Link to="/">Homepage</Link>
    </div>
  )
}
