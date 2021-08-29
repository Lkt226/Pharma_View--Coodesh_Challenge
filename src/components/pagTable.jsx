export const Table = () => {


  return (
    <div className="container my-4 w-50">
      <div id="mylist" className="card">
        <div className="row mt-3">
          <div className="col-10">
            <input type="search" className="search form-control" placeholder="Search..."/>
          </div>
          <div className="cal-2">

          </div>
        </div>
        <ul className="list list-group list-group-flush"></ul>
        <div className="flex justify-content-center mt-2">
          <ul className="pagination">1 2 3</ul>
        </div>
        <div style={{display: "none"}}>
          <li id="myitem" className="list-group-item">
            <h4 className="name mb-0"></h4>
            <small className="city text-muted"></small>
            <div className="d-flex justify-content-between">
              <div className="ext"></div>
              <div className="date"></div>
            </div>
          </li>
        </div>
      </div>
    </div>
  )
}