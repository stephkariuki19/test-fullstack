import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import Header from '../../components/header/Header'
import { useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
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
