import React from 'react'

const NumberList = (props) => {
    const displayNum = props.results.map(numbers => {
       return <li>{numbers}</li> 
    })
    return (
        <div>
            <h2>Numbers Found:</h2>
            {displayNum}
        </div>
    )
}

export default NumberList;
