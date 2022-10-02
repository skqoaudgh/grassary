import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

import styles from './DiaryItem.module.scss';

const DiaryItem = ({ name, picture, date, content }) => (
	<li className={styles.DiaryItem}>
		<Avatar
			className={styles.DiaryItem__avatar}
			name={name}
			src={picture}
			size="56"
			textSizeRatio={2}
			color="#343a40"
			round
		/>
		<div>
			<strong>{name}</strong>
			<span className={styles.DiaryItem__date}>{date}</span>
			<div className={styles.DiaryItem__content}>{content}</div>
		</div>
	</li>
);

DiaryItem.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

DiaryItem.defaultProps = {
	picture: '',
};

export default DiaryItem;
