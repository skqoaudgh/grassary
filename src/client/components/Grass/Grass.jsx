import Calendar from 'react-github-contribution-calendar';

import styles from './Grass.module.scss';

const panelColors = ['#6c757d', '#6f42c1'];

const Grass = () => {
	return (
		<div className={styles.Grass}>
			<Calendar
				values={{}}
				utils={Date.now()}
				panelColors={panelColors}
				weekNames={[]}
			/>
		</div>
	);
};

export default Grass;
