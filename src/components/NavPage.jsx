import React from 'react'
import {HiArrowLongRight, HiArrowLongLeft} from "react-icons/hi2";

const NavPage = (props) => {

    if (props.page==1){
        return (
            <header className='d-flex justify-content-between align-items-center'>
                <p className='font-weight-bold display-6'>Page : {props.page}</p>
        
                    <button className='btn btn-primary btn-sm mx-1'
                    onClick={()=>props.setPage(props.page+1)}>
                         <HiArrowLongRight className='display-6'/>   
                    </button>
                
            </header>
          )

    }else if(props.page==42){
        return (
            <header className='d-flex justify-content-between align-items-center'>
                <p className='font-weight-bold display-6'>Page : {props.page}</p>
        
                    <button className='btn btn-primary btn-sm mx-1'
                    onClick={()=>props.setPage(props.page-1)}>
                        <HiArrowLongLeft className='display-6'/>
                    </button>
                
            </header>
          )
    }else{
        return (
            <header className='d-flex justify-content-between align-items-center'>
                <p className='font-weight-bold display-6'>Page : {props.page}</p>
        
                <div>
                    <button className='btn btn-primary btn-sm mx-1'
                    onClick={()=>props.setPage(props.page-1)}>
                        <HiArrowLongLeft className='display-6'/>
                    </button>
        
                    <button className='btn btn-primary btn-sm mx-1'
                    onClick={()=>props.setPage(props.page+1)}>
                         <HiArrowLongRight className='display-6'/>   
                    </button>
                </div>
                
            </header>
          )
    }
  
}

export default NavPage