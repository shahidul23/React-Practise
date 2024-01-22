import React from 'react';
import PropTypes from 'prop-types' 

const User = (props) => {
  return (
    <div>
        <h1>{props.user.name}</h1>
        <h3>{props.user.id}</h3>
    </div>
  )
};

User.propTypes = {
    user: PropTypes.shape({
        name:PropTypes.string,
        id:PropTypes.number,
    })
}

User.defaultProps = {
    user:PropTypes.shape({
        name:"user name missing",
        id:404,
    })
}

// User.propTypes = {
//     userName: PropTypes.string,
//     userId: PropTypes.number
// };
// User.defaultProps = {
//     userName:"default name",
//     userId: 0,
// }


export default User;
