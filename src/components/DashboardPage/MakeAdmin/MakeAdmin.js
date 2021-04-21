import React from 'react';
import { useHistory } from 'react-router';

const MakeAdmin = () => {

    let history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        const email = e.target[0].value;
        fetch('https://digital-agency-1994.herokuapp.com/adminEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => console.log(data))

        history.push("/dashboard")

    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit} className="mt-5">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required/>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default MakeAdmin;