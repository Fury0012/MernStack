import React, { useState } from "react";

const Form = (props) => {
    const { boxColorArray, setboxColorArray } = props;
    const {color, setColor} = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit= { submitHandler } style={{margin: "20px"}} >
                <div>
                    <label htmlFor="firstName" >Color</label>
                    <input
                    type="text"
                    name="color"
                    onChange={ (e) => setColor(e.target.value) }
                    />
                </div>
            </form>
        </div>
    )
}
export default Form;