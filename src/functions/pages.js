import Page from "../models/Page";

export const getPages = (slug = '') => fetch(`http://wordpress.test/wp-json/wp/v2/pages?slug=${slug}`)
    .then(res => res.json())
    .then(pages => pages.map(page => new Page(page.id, page.slug, page.title.rendered, page.content.rendered)));
