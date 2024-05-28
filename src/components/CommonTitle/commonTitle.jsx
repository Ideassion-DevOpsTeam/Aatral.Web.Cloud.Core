import React, { Fragment } from 'react';
import '../../styles/commonTitle.scss';

const commonTitle = ({ firstWord, secondWord }) => {
  return (
    <Fragment>
          <p className="div-title">{firstWord} <span>{ secondWord }</span></p>      
    </Fragment>
  )
}

export default commonTitle