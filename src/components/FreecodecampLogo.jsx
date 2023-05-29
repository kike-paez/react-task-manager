import freeCodeCampLogo from '../img/freecodecamp-logo.png'
import React from 'react';

const FreecodecampLogo = () => {
    return (
        <div className='freecodecamp-logo-container'>
            <img
                src={freeCodeCampLogo}
                className='freecodecamp-logo'
                alt='freeCodeCamp logo'
            />
        </div>
    );
}

export default FreecodecampLogo;
