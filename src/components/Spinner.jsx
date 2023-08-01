import React, { Component } from 'react'
import loading from '../components/loading.gif'

const Spinner =()=> {
    return (
      <div className='text-center'>
        <img className="my-3" scr={loading} alt='loading'/>
      </div>
    )
}
export default Spinner
