import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../functions/categories';
import { getPages } from '../../functions/pages';

let isLoaded = false;

export default function Header() {
    const [menu, setMenu] = useState({
        categories: [],
        pages: []
    });

    if (!isLoaded) {
        Promise.all([getCategories(), getPages()])
            .then(values => {
                setMenu({
                    categories: values[0],
                    pages: values[1]
                });

                isLoaded = true;
            });
    }

    const categoriesLinks = menu.categories.map(category => (
        <li key={category.id} className="nav-item">
            <Link className="nav-link" to={`/categories/${ category.slug }/posts`}>{ category.name }</Link>
        </li>
    ));

    const pagesLinks = menu.pages.map(page => (
        <li key={page.id} className="nav-item">
            <Link className="nav-link" to={`/${ page.slug }`}>{ page.title }</Link>
        </li>
    ));

    return (
        <header className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            { categoriesLinks }
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            { pagesLinks }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}