const {isMatch} = require('date-fns')

const isDate = ( value ) => {

    if ( !value ) {
        return false;
    }

    const fecha = value.toString();
    
    return isMatch(fecha, 't');
    
}

module.exports = { isDate };


