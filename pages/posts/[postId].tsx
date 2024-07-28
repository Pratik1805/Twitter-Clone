import Form from "@/Components/Form";
import Header from "@/Components/Header";
import CommentFeed from "@/Components/posts/CommentFeed";
import PostItem from "@/Components/posts/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";


const postView = () => {
    const router = useRouter();
    const { postId } = router.query;

    const { data:fetchedPost, isLoading } = usePost(postId as string);

    if(isLoading || !fetchedPost){
        return (
            <div className=" flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={80}/>
            </div>
        )
    }
  return (
    <>
        <Header label="Tweet" ShowBackArrow/>
        <PostItem data={fetchedPost}/>
        <Form postId={postId as string} isComment placeholder="Tweet your reply"/>
        <CommentFeed comments = {fetchedPost?.comments}/>
    </>
  )
}

export default postView;