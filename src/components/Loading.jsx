
function Loading() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'100vh', width:'100vw'}}>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only"></span>
          </div>
          <p>Loading...</p>
        </div>
  )
}

export default Loading