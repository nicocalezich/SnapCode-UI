import React from 'react'

const Repo = () => {
    return (
        <form className="row g-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Code</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            {/* TODO TAGS */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tags</label>
                <input  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
        </form>
    )
}

export default Repo
