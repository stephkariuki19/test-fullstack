import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import Header from '../../components/header/Header'

export default function Home() {
  return (
    <>
          <Header/>
            <div className='home'>
                <Posts/>
                <Sidebar/>
          </div>
    </>
   
  )
}
