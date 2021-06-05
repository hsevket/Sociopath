import { useState, useEffect } from "react";
import CommendArea from "./CommendArea";
import PostCard from "./PostCard";

const Posts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
      fetch("https://dummyapi.io/data/api/post", {
        headers: { "app-id": "60a19608e057d223a7e800ce" },
      })
        .then((response) => response.json())
        .then((data) => setPosts(data.data));
    }, []);

return (<CommendArea>
  {!posts && <div>Loading </div>}
  {posts && posts.map((data, i) => <PostCard key={i} Data={data} />)}
</CommendArea>);}

export default Posts;