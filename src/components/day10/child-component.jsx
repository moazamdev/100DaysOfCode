import React, { memo } from 'react';
const TheChild =
    memo(function TheChild({ valuePassing, details, handleChildClick }) {

        return (
            <button onClick={handleChildClick}>{details} - {valuePassing}</button>
        )
    })

export default TheChild;