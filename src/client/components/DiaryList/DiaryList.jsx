import { List } from 'reactstrap';
import PropTypes from 'prop-types';
import DiaryItem from '@/components/DiaryItem';

import styles from './DiaryList.module.scss';

const options = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
};
const DiaryList = ({ list }) => (
	<List className={styles.DiaryList} type="unstyled">
		{list.map((item) => (
			<DiaryItem
				key={item.id}
				name={item.name}
				avatarSrc={item.avatarSrc}
				date={new Intl.DateTimeFormat('en-US', options).format(item.date)}
				content={item.content}
			/>
		))}
	</List>
);

DiaryList.propTypes = {
	list: PropTypes.array,
};

DiaryList.defaultProps = {
	list: [],
};

export default DiaryList;
