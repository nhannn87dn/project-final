import { notFound } from "next/navigation";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const posts = await response.json();
  if(!posts) return notFound;
  
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">POst</h1>
      <ul>
      {
        posts && posts.length > 0 && posts.map((post: {title: string, id: string})=>{
          return <li key={post.id}>
              {post.title}
          </li>
        })
      }
      </ul>
    </div>
  );
}
