function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? 
                <img className="activator" src={`https://dummyimage.com/300x420/3d3d3d/f7f7f7&text=${title}`} alt="poster"/>
                    :
                    <img className="activator" src={poster} alt="poster"/>
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>
}

export {Movie}