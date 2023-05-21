import React from 'react'

const NavPage = (props) => {
  return (
    <header className='d-flex justify-content-between align-items-center'>
        <p>Page : {props.page}</p>
        <button className='btn btn-primary btn-sm'
        onClick={()=>props.setPage(props.page+1)}>
            Page: {props.page+1} 
        </button>
    </header>
  )
}

export default NavPage