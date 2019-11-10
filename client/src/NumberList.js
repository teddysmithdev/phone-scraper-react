import React from 'react'

const NumberList = (props) => {
    const map = props.value.map((i) => {
        return <li>{i}</li>
    })
    return (
        <div>
            <h2>Numbers Found:</h2>
            <div>{map}</div>
        </div>
    )
}

export default NumberList;
