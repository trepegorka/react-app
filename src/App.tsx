import React, {useState} from 'react';
import './styles/app.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'ААВОВЛ', body: 'ДД'},
        {id: 2, title: 'ДДВЬЫДЫ', body: 'ББ'},
        {id: 3, title: 'ББВЫЩДЦ', body: 'АА'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost: any) => {
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