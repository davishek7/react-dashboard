import React from 'react'

function AuthMessage({ message }) {
  return (
    <div>
        <div className="card-body">
            <p className="mb-3">{message}</p>
        </div>
    </div>
  )
}

export default AuthMessage