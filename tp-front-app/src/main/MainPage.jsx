import React from 'react'
// router에도 선언해야 사용가능
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';

import NavBar from '../layout/NavBar'

export default function MainPage() {
  return (
    <div>
      <Header/>
      <NavBar/>
      MainPage
      <Outlet/>
    </div>
  )
}
