import React from 'react'

const NumberList = (props) => {
    const displayNum = props.phoneResults.map(numbers => {
       return <li className="list-group-item">{numbers}</li>
    })
    return (
        <div>
            <ul className="list-group">
                {displayNum}
            </ul>    
        </div>
    )
}

export default NumberList;
