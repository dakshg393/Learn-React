import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin } from '../store/authSlice'

import {Button,Input,Logo} from './index'

import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import {useForm} from "react-hook-form"


function Login(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register ,handleSubmit }= useForm()
    const [error,setError] = useState('')


    const login = async(data)=>{
        console.log(data)
        setError("")
        try {
            const session = await authservice.login(data)
            if(session) {
                const userData = await authservice.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData));
                    navigate("/")
                }
            }
        } catch (err) {
            setError(err)
        }
    }


    return(
        <div className='flex item-center justify-center w-full'> 
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            
            <div className='mb-2 flex justify-center '>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>

            <h2 className='text-center text-2xl font-bold leading-tight'> Sign in to your Account </h2>
            <p className='mt-2 text-center text-base text-black/60'>
            
                Don&apos;t have any Account ? &nbsp;
                <Link 
                to='/signup' 
                className='font-medium text-primery transition-all duration-200 hover:underline'>
                    Signup
                </Link>
                
            
            </p>

                {error && <p className='text-red-500 text-center'>{error} </p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>

                        <Input label="Email:" type="email" placeholder="Enter Your Email" 
                        {...register("email" , {
                            required:true,
                            validate:{
                                matchPatern : (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(value) 
                                || "Email Address must be Validate"
                            }
                        })} />

                        <Input label="password" placeholder="Enter your Passeword " type="password" 
                        {...register("password" ,{
                            required:true,
                            validate: {
                                matchPatern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) 
                                || "Password must be validate"
                            }
                        }
                        )}/>

                        <Button type='submit' className='w-full' > Sign in </Button>

                    </div>
                </form>

             
            </div>

        </div>
    )
}

export default Login