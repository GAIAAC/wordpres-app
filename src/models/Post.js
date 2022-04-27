export default class Post {
    constructor(id, slug, title, content, featured) {
        this.content = content;
        this.featured = featured;
        this.id = id;
        this.slug = slug;
        this.title = title;
    }
}