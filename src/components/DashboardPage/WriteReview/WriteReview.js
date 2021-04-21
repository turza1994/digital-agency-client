import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';

const WriteReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { displayName, email, photoURL } = loggedInUser;
    const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        // sending user gmail profile image to database as userPhoto
        data.photoURL = photoURL;

        // console.log('gmail data', data);

        // insert review into database
        fetch('https://digital-agency-1994.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    // alert('Review post successfully.')
                    setFormSuccessMessage('Review post successfully ✔️')
                    setFormErrorMessage(null);
                    document.getElementById('myform').reset(); //reset form data
                } else {
                    setFormErrorMessage('Review post failed ❌')
                    setFormSuccessMessage(null);
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h2>Write Review</h2>
            <form className="customFormStyle mb-5 w-50 mt-5" onSubmit={handleSubmit(onSubmit)} id="myform">

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="userName" className="form-control form-control-lg" value={displayName} />
                        {errors.userName && <span className="text-danger">This field is required</span>}
                    </div>
                    <br/>
                    <div className="form-group animate__animated animate__fadeInRight">
                        <input type="number" ref={register({ required: true })} name="rating" className="form-control form-control-lg" min="1" max="5" placeholder="Rating (1-5)" />
                        {errors.rating && <span className="text-danger">This field is required</span>}
                    </div>
                    <br/>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="comment" className="form-control" cols="30" rows="6" maxlength="100" placeholder="Description(max 100words)"></textarea>
                        {errors.comment && <span className="text-danger">This field is required</span>}

                    </div>
                    <br/>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary ms-auto" >Submit</button>

                        <div>
                            {
                                formSuccessMessage && <p className="formSubmitMsgStyle">{formSuccessMessage}</p>
                            }
                            {
                                formErrorMessage && <p className="" style={{ color: 'red' }}>{formErrorMessage}</p>
                            }
                        </div>
                    </div>

            </form>
        </div>
    );
};

export default WriteReview;