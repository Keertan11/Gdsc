'use client'
import React, { useState } from 'react'
import Button from './Button';
import { Fugaz_One } from "next/font/google";
import { useAuth } from '@/context/Authcontext';

const Fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsregister] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)

  const { signup, login } = useAuth()

  async function handleSubmit(){
    if(!email || !password || password.length < 6){
      return 
    }
    setAuthenticating(true)
    try {
      
      if (isRegister){
        await signup(email, password)
        console.log('Signing up a new user')
      }else{
        await login(email, password)
        console.log('Logging in existing user')
      }
    } catch (err) {
      console.log(err)
    }finally{
      setAuthenticating(false)
      setEmail('')
      setPassword('')
    }  
  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + Fugaz.className}>{isRegister ? 'Register' : 'Log In'}</h3>
      <p>You&apos;re one step away!</p>
      <input value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Email' />
      <input type='password' value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Password' />
      <Button clickHandler={handleSubmit} text={authenticating ? "Submitting" : 'Submit'} full/>
      <p className='text-center'>{isRegister ? 'Already have an account? ': 'Don\'t have an account? '}
        <button onClick={()=>{
          setIsregister(!isRegister)
        }} className='text-indigo-600'> {isRegister ?'Sign In' : 'Sign up'}</button>
      </p>
    </div>
  )
}

export default Login
