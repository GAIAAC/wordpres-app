import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPages } from "../../functions/pages";

export default function Page() {
    const { slug } = useParams('');
    const [page, setPage] = useState(null);

    useEffect(() => {
        getPages(slug).then(page => setPage(page[0] || null));
    }, [slug]);

    return (
        <>
            <h1>{ page?.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: page?.content }}></div>
        </>
    );
}