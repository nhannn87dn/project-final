import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState<{userId: number, id: number, title: string}[]>([]); // Thêm state để lưu dữ liệu

  useEffect(() => {
    try {
     const fetchPost = async()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const posts = await response.json();
      setPosts(posts)
     }
     fetchPost();
    } catch (error) {
      console.log('<<=== 🚀 error ===>>',error);
    }
  }, []); // Chạy một lần khi component mount

  return (
    <>
    <h1>POSTs</h1>
    <p>Fetch APO form: https://jsonplaceholder.typicode.com/posts</p>
    <ul>
    {
        posts && posts.length > 0 && posts.map((post)=>{
          return <li key={post.id}>
              {post.title}
          </li>
        })
      }
      </ul>
    </>
  );
}

export default App
