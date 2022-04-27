import Post from "../models/Post";

export const getPosts = (categoryId) => fetch(`http://wordpress.test/wp-json/wp/v2/posts?_embed${categoryId ? `&categories=${categoryId}` : ''}`)
    .then(res => res.json())
    .then(posts => posts.map(post => new Post(
        post.id,
        post.slug,
        post.title.rendered,
        post.content.rendered,
        post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0]?.source_url : '')));