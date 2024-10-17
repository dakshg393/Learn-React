import React from 'react'
import { useForm } from 'react-hook-form'
import {login,logout}  from '../store/authSlice'
import authservice from '../appwrite/auth'
import {Link, useNavigate } from 'react-router-dom'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function Signup(){
    const dispatch = useDispatch()
    const {register,handleSubmit} =useForm()
    const [error,setError] = useState()
    const navigate = useNavigate()

    const create = async(data) => {
        setError("")
        try {

            const userData = await authservice.createAccount(data)

            if(userData){
                const userData = await authservice.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                }
            }
            
        } catch (error) {
            setError(error.message)
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

            <h2 className='text-center text-2xl font-bold leading-tight'> Sign Up to your Account </h2>
            <p className='mt-2 text-center text-base text-black/60'>
            
                Alredy have an Account ? &nbsp;
                <Link 
                to='/login' 
                className='font-medium text-primery transition-all duration-200 hover:underline'>
                    Login
                </Link>
                
            
            </p>

                {error && <p className='text-red-500 text-center'>{error} </p> }

                <form onSubmit={handleSubmit(create)} className='mt-8'>
                    <div className='space-y-5'>

                        <Input lebel="Name" type="text" placeholder="Enter Your Name"  
                        {...register("name",{
                            required:true,
                            validate:{

                            }
                        })} />
                        <Input label="Email" type="Email" placeholder="Enter Your Email"
                        {...register("email",{
                            required:true,
                            validate:{
                                matchPatern: (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(value)
                                || "Email Address Must Be Validate "
                            }
                        })}
                        />
                        <Input label="password" placeholder="Enter Your Password" type="Password"
                        {...register("password" , {
                            required:true,
                            matchPatern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) 
                            || "Password must be validate "
                        })} />
                        

                        <Button type='submit' className='w-full' > Sign Up </Button>

                    </div>
                </form>

             
            </div>

        </div>
    )
}

export default Signup