import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.module.scss';

const Spinner = (props) => {
	return (
		<div className={styles.Spiner_container}>
			<div className={styles.Spinner}>
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="46" />
				</svg>
			</div>
		</div>
	);
};

Spinner.propTypes = {};

export default Spinner;
