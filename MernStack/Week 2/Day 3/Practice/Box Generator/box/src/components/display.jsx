import react from "react"

const Display = (props) => {
    const { boxColorArray } = props;

    return (
        boxColorArray.map((color, index) => (
            <div key={index} style={{
                display: "inline-block",
                margin: "10px",
                height: "50px",
                width: "50px",
                background: color
            }}>
            </div>
        ))
    );
};
export default Display