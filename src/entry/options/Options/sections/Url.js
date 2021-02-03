import React from 'react';
import OptionToggle from '../../OptionToggle';

const Url = ({ updateStorage, useDotCn }) => {
    return (
        <div className='opt-item'>
            <OptionToggle
                id='use-dot-cn'
                message='optionsUseDotCn'
                checked={useDotCn}
                onClick={() => updateStorage('useDotCn', !useDotCn)}
            />
        </div>
    );
};

export default Url;