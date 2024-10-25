import React from 'react';

const ComputerDetails = ({ comp }) => {
    return (
        <>
            <ul>
                <li><strong>Brand: </strong> {comp.brand}</li>
                <li><strong>Model: </strong>{comp.model}</li>
                <li><strong>Processor: </strong>{comp.processor}</li>
                <li><strong>Ram: </strong>{comp.RAM}</li>
                <li><strong>Storage: </strong>{comp.storage}</li>
                <li><strong>Price: </strong>{comp.price}</li>
                <li><strong>Emoji </strong>{comp.emoji}</li>
            </ul>
        </>
    );
};

export default ComputerDetails;
