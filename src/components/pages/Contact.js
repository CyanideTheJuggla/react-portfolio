import React from "react";

function Contact() {
    return (
        <div className="pt-2">
            <h2 className="text-white mt-2 mb-2 py-2 bg-heading text-center rounded-pill">Contact</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="inputName" className="col-sm-1-12 col-form-label">Name</label>
                    <div className="col-sm-1-12">
                        <input type="text" className="form-control" name="inputName" id="inputName" placeholder="First Last" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-12 col-form-label">Email</label>
                    <div className="col-sm-1-12">
                        <input type="email" className="form-control" name="inputEmail" id="inputName" placeholder="Email@Address.com" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="textMessage" className="form-label">Messsage</label>
                    <textarea className="form-control" name="textMessage" ></textarea>
                </div>
                <div className="mt-5 mb-3 mx-1 row">
                    <button type="submit" className="btn btn-block w-100 text-center text-white bg-Primary" onClick={ (e)=>e.preventDefault() }>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
