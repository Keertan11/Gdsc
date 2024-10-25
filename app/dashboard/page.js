'use client'
import React, { useState } from 'react'
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import { useAuth } from '@/context/Authcontext';

const page = () => {
  const {currentUser, loading} = useAuth()

  const log = () => {
    if (currentUser) {
      return <Dashboard />
    } else {
      return (
        <Login />
      )
    }
  }

  return (
    <>
      {log()}
    </>
  )
}

export default page
