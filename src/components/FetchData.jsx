import React from 'react';

const FetchData=({postData})=>{
    const { userId, id, title, body } = postData;
    return(
        <>
        <p><strong>User Id: </strong>{userId}</p>
        <p><strong>Id: </strong>{id}</p>
        <p><strong>Title: </strong> {title}</p>
        <p><strong>Body: </strong> {body}</p>
        </>
    )
}

export default FetchData;