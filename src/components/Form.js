import React, {useState} from 'react'
import Axios from 'axios';
import Card from './Card'

export default function Form() {

    const [respond, setRespond] = useState(false);

    const [input, setInput] = useState(false);

    const handleInput = (file) => {
        // console.log(file.target.files[0]);
        setInput(file.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const image = new FormData();

        image.append("image", input)
        
        Axios.post('https://aws-rekognition-text.herokuapp.com/api/v1/detect-text', image)
            .then(result => {
                setRespond(result)
                // console.log(result);
            })
            .catch(err => alert("Please Input Image Stupid!"))
    }

    return (
        <div>
            <form onSubmit = {handleSubmit} action="">
                <div className='form'>
                    <input onChange={handleInput} type="file" name="image" className="input" />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                <Card data = {respond} text={"string"}/>
            </div>
        </div>
    )
}
