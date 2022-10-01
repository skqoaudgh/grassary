import PropTypes from 'prop-types';

import GrassaryLogo from '@/assets/logo.svg';
import styles from './Logo.module.scss';

const Logo = ({ showLabel, size }) => (
	<div className={styles.Logo}>
		<img className={styles[`Logo--${size}`]} src={GrassaryLogo} alt="logo" />
		{showLabel && <span>grassary</span>}
	</div>
);

Logo.propTypes = {
	showLabel: PropTypes.bool,
	size: PropTypes.string,
};

Logo.defaultProps = {
	showLabel: false,
	size: 'md',
};

export default Logo;
