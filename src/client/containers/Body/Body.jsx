import DiaryList from '@/containers/DiaryList';
import TextInput from '@/containers/TextInput';
import Grass from '@/components/Grass';

import styles from './Body.module.scss';

const Body = () => {
	const list = [
		{ id: 1, name: 'mac', date: new Date(), content: 'ttqweqwewqe' },
		{ id: 2, name: 'mac', date: new Date(), content: 'sadasdsadasd' },
	];
	return (
		<section className={styles.Body}>
			<Grass />
			<TextInput bsSize="md" />
			<div className={styles.Body__content}>
				<DiaryList list={list} />
			</div>
		</section>
	);
};

export default Body;
