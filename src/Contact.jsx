import PropTypes from 'prop-types';
export default function Contact(props){
    return (
        <>
        <h2>{props.email} {props.phone}</h2>
        <p>Send me a message!</p>
        </>
    );
}

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};