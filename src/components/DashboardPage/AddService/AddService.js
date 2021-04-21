import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddService = () => {
    const [imageURL, setIMageURL] = useState(null);

    let history = useHistory();

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log(event.target[0].name, event.target[0].value, imageURL);
        const newService = {
            name: event.target[0].value,
            details: event.target[1].value,
            price: event.target[2].value,
            image: imageURL
        }
        const url = `https://digital-agency-1994.herokuapp.com/addService`;
    
        fetch(url, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newService)
        })
        .then(res => console.log('server side response', res))
        history.push("/dashboard")
    } 

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a42122120174ecb35c6d611697a306af');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }

    return (
        <div>
            <h2>Add Service</h2>
            <form onSubmit={handleFormSubmit} className="mt-5 p-5 w-50 d-flex flex-column align-items-center">
                <div className="d-flex justify-content-around form-group">
                    <label htmlFor="name">Service Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <br/>
                <div className="d-flex justify-content-around form-group">
                    <label htmlFor="weight">Service Details:</label>
                    <textarea type="text" name="details" className="form-control" cols="30" rows="6" maxlength="100" placeholder=""></textarea>
                </div>
                <br/>
                <div className="d-flex justify-content-around form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price"/>
                </div>
                <div className="d-flex justify-content-around form-group">
                    <label htmlFor="photo">Upload Photo</label>
                    <input type="file" name="photo" id="photo" onChange={handleImageUpload}/>
                </div>
                <div className="d-flex justify-content-center form-group">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
};

export default AddService;