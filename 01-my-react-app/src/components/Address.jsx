import PropTypes from 'prop-types';

Address.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
};

const Address = ({ city, state }) => {
    return (
        <div>
            <p>City: {city}</p>
            <p>State: {state}</p>
        </div>
    )
}

export default Address

