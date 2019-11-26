import React from 'react'

const EmailList = (props) => {
    const displayEmail = props.emailResults.map(emails => {
       return <li className="list-group-item">{emails}</li>
    })
    console.log(props.emailResults)
    return (
        <div>
            <ul className="list-group">
                {displayEmail}
            </ul>    
        </div>
    )
}

export default EmailList;
