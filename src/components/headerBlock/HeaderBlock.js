import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './HeaderBlock.scss';

import { starIcons } from '../../data/icons';

function HeaderBlock({ headerName, moreInfo }) {
    return (
        <Container className='full-width-container'>
            <div className='header-block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={starIcons[0].viewBox} className='header-star-icons'>
                    <path className='cream-star-icon' d={starIcons[1].d}/>
                    <path className='cream-star-icon' d={starIcons[2].d}/>
                    <path className='cream-star-icon' d={starIcons[3].d}/>
                </svg>
                <h1>{headerName}</h1>
                <hr />
            </div>
            <p className='small-p more-details-text' hidden={!moreInfo}>Click the download button in the bottom-right corner of the screen for a PDF portfolio with more details!</p>
        </Container>
    );
}

export default HeaderBlock;