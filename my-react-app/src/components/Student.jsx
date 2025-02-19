import Address from "./Address.jsx";
import PropTypes from 'prop-types';

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
};

function Student({ name, age, city, state }) {
    
    
    return (
        <div>
            <h2>Student</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <Address city={city} state={state}/>
        </div>
    )
}

export default Student
