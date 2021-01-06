import React from 'react';
import { getI18nMessage } from '../../../../public/chrome-call';
import OptionToggle from '../../OptionToggle';

const Pdf = ({ updateStorage, enablePdfViewer }) => {
    return (
        <>
            <h3>PDF</h3>
            <div className='opt-item'>
                <OptionToggle
                    id='enalbe-pdf-viewer'
                    message='optionsEnablePdfViewer'
                    checked={enablePdfViewer}
                    onClick={() => updateStorage('enablePdfViewer', !enablePdfViewer)}
                />
                <div className='item-description'>{getI18nMessage('optionsEnablePdfViewerDescription')}</div>
            </div>
        </>
    );
};

export default Pdf;