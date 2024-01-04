import React, { useState } from 'react'
import axios from 'axios'

const ApiCallButton = () => {
    const submit = (e)=>{
        e.preventDefault();
        alert('hie');
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <input type="submit" value="Call api" />
        </form>
    </div>
  )
}

export default ApiCallButton
