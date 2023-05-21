import React from 'react'

const NavPage = (props) => {
  return (
    <header className='d-flex justify-content-between align-items-center'>
        <p>Page : {props.page}</p>
        <button className='btn btn-primary btn-sm'
        onClick={()=>console.log("click")}>
            page 2
        </button>
    </header>
  )
}

export default NavPage