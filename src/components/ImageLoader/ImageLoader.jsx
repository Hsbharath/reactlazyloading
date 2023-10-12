import React from 'react'
import styled from 'styled-components';

const ImageLoader = (width, height) => {
    const StyledDiv = styled.div`
        width: ${width},
        height: ${height},
    `;
    return (
        <>
            <div  className='w-full grid grid-cols-5 gap-2'>
                {
                    Array(15).fill('').map((elem, index) => (
                        <StyledDiv key={index}>
                            <div className='col-span-1 w-full h-full bg-red-400'></div>
                        </StyledDiv>
                    ))
                }
            </div>
        </>
    )
}

export default ImageLoader