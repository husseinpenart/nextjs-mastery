import React from 'react'
type childrentype={
   children: React.ReactNode
}
const layout = ({children}:childrentype) => {
  return (
    <div>
        <h1 className='text-center'>Authentication</h1>
        {children}
    </div>
  )
}

export default layout