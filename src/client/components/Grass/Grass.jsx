import Calendar from 'react-github-contribution-calendar';
import PropTypes from 'prop-types';

import styles from './Grass.module.scss';

const panelColors = ['#6c757d', '#6f42c1'];

const date = new Date();
date.setDate(date.getDate() + 1);

const Grass = ({ list }) => (
	<div className={styles.Grass}>
		<Calendar
			values={list}
			until={date}
			panelColors={panelColors}
			weekNames={[]}
		/>
	</div>
);

Grass.propTypes = {
	list: PropTypes.object,
};

Grass.defaultProps = {
	list: {},
};

export default Grass;
