import '../../css/components/ExpandingSearchButton.scss'

const ExpandingSearchButton = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-3">
                    <form action="" className="search-form">
                        <div className="form-group has-feedback">
                            <form action='/search' method='get'>
                                <input type="text" className="form-control" name="name" placeholder="search"/>
                                <span className="glyphicon glyphicon-search form-control-feedback"></span>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExpandingSearchButton