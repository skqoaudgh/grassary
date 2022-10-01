import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

import styles from './DiaryItem.module.scss';

const DiaryItem = ({ name, avatarSrc, date, content }) => (
	<li className={styles.DiaryItem}>
		<Avatar
			className={styles.DiaryItem__avatar}
			name={name}
			src={avatarSrc}
			size="56"
			textSizeRatio="2"
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
	avatarSrc: PropTypes.string,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

DiaryItem.defaultProps = {
	avatarSrc: '',
};

export default DiaryItem;
