import React from 'react'

export default function AddItems() {
    return (
        <div>
            <form action="">
                <div className="mx-auto w-50">
                    <div className="">
                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input type="email" id="title" className="form-control" />
                        </div>
                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="desc">Description</label>
                            <textarea name="" id="" cols="30" rows="4" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-outline-primary mb-4 mx-auto">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
