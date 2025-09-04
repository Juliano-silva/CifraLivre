export default function CardMusic(Thumb,musicName,Creater,Time){
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="card bg-secondary border-0 music-card">
                <div className="card-img-top position-relative" style={{backgroundImage:`url(${Thumb})`,height:"200px"}}></div>
                <div className="card-body">
                    <h6 className="card-title mb-1">{Creater}</h6>
                    <p className="card-text text-muted small">{musicName}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{Time}</small>
                        <div>
                            <button className="btn btn-sm btn-outline-light me-1">
                                <i className="fas fa-heart"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-light">
                                <i className="fas fa-share"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}