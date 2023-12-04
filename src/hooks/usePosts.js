import React, {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
            if (sort) {
                // @ts-ignore
                return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            return posts;
        }, [sort, posts]
    );
};

export const usePosts = (posts, sort, searchQuery) =>{
    const sortedPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts]);
}