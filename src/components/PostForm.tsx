import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}:any) => {

    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e:any)=>{
        e.preventDefault()

        const newPost = {
            ...post,
            id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})

    }

    return (
        <form action="">

            <MyInput
                type='text'
                placeholder='Название поста'
                value={post.title}
                onChange={(e:any)=>setPost({...post, title: e.target.value})}
            />
            <MyInput
                type='text'
                placeholder='Описание поста'
                value ={post.body}
                onChange={(e:any)=>setPost({...post, body: e.target.value})}
            />

            <MyButton onClick={addNewPost}>Open to Work</MyButton>
        </form>
    );
};

export default PostForm;