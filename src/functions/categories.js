import Category from "../models/Category";

export const getCategories = (slug = '') => fetch(`http://wordpress.test/wp-json/wp/v2/categories?slug=${slug}`)
    .then(res => res.json())
    .then(categories => categories.map(category => new Category(category.id, category.slug, category.name)));