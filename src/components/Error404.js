import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
        <h1 className="w-80 text-red-600 text-xl px-6 mt-6 mx-auto">Page Not Found</h1>
        <Link className='w-80 block text-red-600 text-xl px-6 mt-6 mx-auto' to="/">Go to Homepage</Link>
    </div>
  )
}

export default Error404