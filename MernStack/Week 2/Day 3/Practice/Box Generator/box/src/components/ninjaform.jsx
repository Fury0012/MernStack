import React from "react";

const NinjaForm = (props) => {
    const { ninjaBoxArray, setNinjaBoxArray } = props;


    const [ color, setColor ] = useState("")
    const [ size, setSize ] = useState("50")
    
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
        <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
            <div>
            <label>Color</label>
            <input 
                type="text" 
                name="color"
                value={color}
                onChange={ (e) => setColor(e.target.value) }
            />
            </div>
            <div>
            <label>Width and Height in Pixels</label>
            <input 
                type="text" 
                name="size"
                value={size}
                onChange={ (e) => setSize(e.target.value) }
            />
            </div>
            <button>Add</button>
        </form>


    </div>
    )
    }
    


export default NinjaForm;