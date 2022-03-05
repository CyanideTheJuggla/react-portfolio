import React from "react";

function Contact() {
    const requiredValidation = e => {
        const thisElement = e.target;
        if(!thisElement.hasAttribute('disabled')){
            if(thisElement.name.includes('inputName')){
                if(thisElement.value.toString().match(`^([-'a-zA-ZÀ-ÖØ-öø-ſ]{3,15}) ([-'a-zA-ZÀ-ÖØ-öø-ſ]{3,25})`)){
                    thisElement.className = 'form-control border border-3 border-success';
                } else {
                    thisElement.className = 'form-control border border-3 border-danger';
                    const nameErrElement = document.getElementById('nameError');
                    nameErrElement.classList.remove('d-none');
                    setTimeout(() => nameErrElement.classList.add('d-none'), 5000);
                }
            } else if(thisElement.name.includes('inputEmail')){
                if(thisElement.value.toString().match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)){
                    thisElement.className = 'form-control border border-3 border-success';
                } else {
                    thisElement.className = 'form-control border border-3 border-danger';
                    const nameErrElement = document.getElementById('emailError');
                    nameErrElement.classList.remove('d-none');
                    setTimeout(() => nameErrElement.classList.add('d-none'), 5000);
                }
            } else if(thisElement.name.includes('textMessage')){
                if(thisElement.value.length > 100){
                    thisElement.className = 'form-control border border-3 border-success';
                } else {
                    thisElement.className = 'form-control border border-3 border-danger';
                    const nameErrElement = document.getElementById('messageError');
                    nameErrElement.classList.remove('d-none');
                    setTimeout(() => nameErrElement.classList.add('d-none'), 5000);
                }
            }
        }
    }
    const submitContact = e => {
        e.preventDefault();
        const inputs = document.getElementsByClassName('form-control');
        let validated = 0;
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            requiredValidation({target: element});
            if(element.className.includes('success')) validated++; 
        }
        if (validated === 3) {
            inputs[0].value = inputs[1].value = inputs[2].value = ''; 
            inputs[0].toggleAttribute('disabled');
            inputs[1].toggleAttribute('disabled');
            inputs[2].toggleAttribute('disabled'); 
            e.target.classList.toggle('disabled');
            document.getElementsByClassName('alert')[0].classList.toggle('d-none');
        }
    }
    return (
        <div className="card mt-3 mb-5">
            <div className="card-body">
                <h2 className="text-white my-3 py-2 bg-heading text-center rounded-pill">Contact</h2>
                <form className="bg-Primary-Blend">
                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-form-label">Name</label>
                        <label className="col-sm-5 col-form-label d-none text-danger position-absolute text-end" id="nameError">This field is required, must include first and last name</label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="inputName" id="inputName" placeholder="First Last" onMouseLeave={requiredValidation} onBlur={requiredValidation} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputEmail" className="col-sm-12 col-form-label">Email</label>
                        <label className="col-sm-5 col-form-label d-none text-danger position-absolute text-end" id="emailError">This field is required, be sure to use proper email format</label>
                        <div className="col-sm-1-12">
                            <input type="email" className="form-control" name="inputEmail" id="inputName" placeholder="Email@Address.com" onMouseLeave={requiredValidation} onBlur={requiredValidation} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="textMessage" className="form-label">Messsage</label>
                        <label className="col-sm-4 col-form-label d-none text-danger position-absolute text-end" id="messageError">This field is required, minimum 100 characters</label>
                        <textarea className="form-control" name="textMessage" onMouseLeave={requiredValidation} onBlur={requiredValidation} ></textarea>
                    </div>
                    <div className="mt-5 mb-3 mx-1 row">
                        <button type="submit" className="btn btn-block w-100 text-center text-white bg-Primary" onClick={ submitContact }>Submit</button>
                        <div className="alert alert-success mt-4 d-none" role="alert">
                            <strong>Success!</strong> Your message has been sent. Please allow 24-48 hours to receive a response.
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
