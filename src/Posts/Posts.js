
import Loader from "../Loader/Loader";
import CommendArea from "./components/CommendArea";
import PostCard from "./components/PostCard";

const Posts = ({Posts}) => {
    

return (<CommendArea>
  {  Posts ? Posts.map((data, i) => <PostCard key={i} Data={data} />) : <Loader/>}
</CommendArea>);}

export default Posts;