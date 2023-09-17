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
      try {
        const url = "/api/posts" +search;  // Log the URL being requested
        console.log("Fetching posts from:", url);
        const res = await axios.get(url);
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [search]);
  

  return (
    <>
          <Header/>
            <div className='home'>
                <Posts posts = {posts}/>
                <Sidebar/>
          </div>
    </>
   
  )
}
