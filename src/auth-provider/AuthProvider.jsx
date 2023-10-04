import { createContext } from "react";
import PropTypes from 'prop-types';

export const UserAuth = createContext(null);

const AuthProvider = ({children}) => {

    const info = {

    }
    return (
        <UserAuth.Provider value={info}>
            {children}
        </UserAuth.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;