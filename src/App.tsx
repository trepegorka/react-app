import React, {useEffect, useState} from 'react';
import './styles/app.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostService from "./API/PostService";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts();
    }, [])

    async function fetchPosts() {
        const posts = await PostService.getAll(2, 2)
        setPosts(posts.data);
    }

    const createPost = (newPost: any) => {
        // @ts-ignore
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post: any) => {
        setPosts(posts.filter((p: any) => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Open Modal</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>


            <PostList posts={sortedAndSearchedPosts} remove={removePost}/>

            <hr style={{margin: '20px 5px', height: '0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>


        </div>
    )
}


export default App;