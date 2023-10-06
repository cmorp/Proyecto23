import React from "react";


const Estado = (props) => {
    const { value } = props;
    return (
        <div style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc'
        }}>
            <div style={{
                width: `${value}%`,
                height: '100%',
                backgroundColor: '#4caf50'
            }} />
        </div>
    );
}


export default Estado;