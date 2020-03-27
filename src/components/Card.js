import React from 'react'

export default function Card(props) {

    return (
        
        <div className="card">

            <div style={userStyle} className="Title">
                <div className="text">Detected Text</div>
                <div className="id">Id</div>
                <div className="type">Type</div>
            </div>

            {
                // console.log(props.data.data.data)
                props.data && props.data.data.data.map(result => {
                    
                    return <div key={result.data.Id} style={userStyle}>
                        <div className="text">{result.Text}</div>
                        <div className="id">{result.data.Id}</div>
                        <div className="type">{result.data.Type}</div>
                    </div>
                })
            }
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}