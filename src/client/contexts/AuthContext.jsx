import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

export default AuthContext;

const AuthContextProviderWrapper = ({ children }) => {
	const [id, setId] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [picture, setPicture] = useState('');

	const setUserInfo = useCallback((userInfo) => {
		setId(userInfo.id);
		setEmail(userInfo.email);
		setName(userInfo.name);
		setPicture(userInfo.picture);
	}, []);

	const contextValue = useMemo(
		() => ({ id, email, name, picture, setUserInfo }),
		[id, email, name, picture, setUserInfo],
	);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

AuthContextProviderWrapper.propTypes = {
	children: PropTypes.node,
};

AuthContextProviderWrapper.defaultProps = {
	children: null,
};

export const AuthContextProvider = AuthContextProviderWrapper;
