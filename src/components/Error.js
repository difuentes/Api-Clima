import React from 'react';
import PropTypes  from 'prop-types';

const Error = ({mensaje}) => {
    return (
        <div className="red darken-4 error">{mensaje}</div>  
      );
}

Error.prototype = {
    mensaje: PropTypes.string.isRequired
}

export default Error;