import React from 'react'

const NumberList = (props) => {
    const displayNum = props.results.map(numbers => {
       return <li className="list-group-item">{numbers}</li> 
    })
    return (
        <div className="mt-3">
            <h2>Numbers Found:</h2>
            {displayNum}
        </div>
    )
}

export default NumberList;
