import React from 'react'
import Input from '../FormTags/Input'
import Buttoon from '../FormTags/Buttoon'

function Login() {
  return (
    <>
        <div className="container mt-5"> <form action="">
            <div className="row d-flex justify-content-center">
                    <h1 className='d-flex justify-content-center'>Login</h1>
                    <div id="emailHelp" class="form-text d-flex justify-content-center mb-5">We'll never share your email with anyone else.</div>  
                <div className='col-lg-4'> 
                        <Input lab={'Email Address'}/>
                </div>
                <div className='col-lg-4'>
                        <Input lab={'Password'}/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Buttoon variant={'btn-primary'} val={'Login'}/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login