import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCategories } from "../../functions/categories";
import { getPosts } from "../../functions/posts";
import PostPreview from "../post-preview/PostPreview";

export default function Posts() {
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getCategories(slug)
                .then(categories => categories[0])
                .then(category => getPosts(category.id))
                .then(posts => setPosts(posts));
        } else {
            // Lo slug non è stato individuato nell'URL
            getPosts().then(posts => setPosts(posts));
        }
    }, [slug]);

    const postsPreview = posts.map(post => <PostPreview key={post.id} post={post} />);

    return (
        <>
            <h1>Posts</h1>
            <div className="row">
                { postsPreview }
            </div>
        </>
    );
}