export default function PostPreview(props) {
    return (
        <div className="col-lg-4">
            <div className="card" style={{ width: '100%' }}>
                <img src={props.post.featured} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ props.post.title }</h5>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: props.post.content}}></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
        
    );
}