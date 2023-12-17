import PostItem from "./PostItem";

const PostList = ({posts, remove}: any) => {


    if (posts.length === 0) {
        return <h1 style={{textAlign: "center"}}>No posts yet</h1>
    }
    return (

        <div>
            {posts.map((post: any, index: any) => (
                <PostItem key={post.id} index={index + 1} post={post} remove={remove}/>
            ))}
        </div>
    );
};

export default PostList;