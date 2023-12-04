import React, {useEffect, useRef, useState} from 'react';
import PostItem from "./PostItem";
// @ts-ignore
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const PostList = ({posts, remove}: any) => {


    if (posts.length === 0) {
        return <h1 style={{textAlign: "center"}}>No posts yet</h1>
    }
    return (

        <div>
            <TransitionGroup>
                {posts.map((post:any, index:any) => (
                    <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="post-item"
                    >
                        <PostItem index={index + 1} post={post} remove={remove} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;