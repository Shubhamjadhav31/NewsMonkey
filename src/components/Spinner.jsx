import React, { Component } from 'react'
import loading from '../components/loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img scr={loading} alt='loading'/>
      </div>
    )
  }
}
