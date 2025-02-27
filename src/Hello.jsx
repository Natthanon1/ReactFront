const Hello = ({message, name}) => {
    console.log({message, name});
    return(
        <>
        <h1>
            {message} {name}
        </h1>
        </>
    );
};

import PropTypes from 'prop-types';

Hello.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
export default Hello;