import React from 'react'
import Buttoon from '../FormTags/Buttoon'
import Input from '../FormTags/Input'

function Sign() {
  return (
    <>
          <div className="container mt-5"> <form action="">
            <div className="row d-flex justify-content-center">
                    <h1 className='d-flex justify-content-center'>SIgn Up</h1>
                    <div id="emailHelp" class="form-text d-flex justify-content-center mb-5">Please Complete the fields to register an Account</div>  
                <div className='col-lg-4'> 
                        <Input lab={'First Name'}/>
                </div>
                <div className='col-lg-4'>
                        <Input lab={'Last Name'}/>
                </div>
                <div className='col-lg-4'> 
                        <Input lab={'Email Address'}/>
                </div>
                <div className='col-lg-4'>
                        <Input lab={'Password'}/>
                </div>
                <div className='col-lg-4'>
                        <Input lab={'Phone Number'}/>
                </div>
                <div className='col-lg-4'>
                        <Input lab={'Address'}/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Buttoon variant={'btn-primary'} val={'Register'}/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Sign