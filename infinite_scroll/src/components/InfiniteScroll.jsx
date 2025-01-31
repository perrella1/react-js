import { useState, useEffect } from 'react'
import axios from 'axios';

const InfiniteScroll = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = async () => {

        if (loading) return;
        setLoading(true);

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);

            if (response.data.length > 0) {
                setPosts((prevPosts) => [...prevPosts, ...response.data]);
            } else {
                setHasMore(false);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    },[page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !loading && hasMore)
        {
        setPage((prevPage) => prevPage + 1);
    }

    }
    useEffect(() => {
        const throttleHandleScroll = throttle(handleScroll, 150);
        window.addEventListener('scroll', throttleHandleScroll);

        return () => {
            window.removeEventListener('scroll', throttleHandleScroll);
        }
    },[hasMore, loading]);

    

    return (
        <div>
            <h1>Infinite Scroll</h1>
            <ul>
                {posts.map((post) => (
                    <li key={Math.random()}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    )
}

function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) 
            return;
        
        lastCall = now;
        return func(...args);

    }

}

export default InfiniteScroll
