import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem =(props:any) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} Javascript {props.index}</strong>
                <div>
                    {props.post.title} - {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=>props.remove(props.post)}>Remove</MyButton>
            </div>
        </div>
    );
};

export default PostItem;