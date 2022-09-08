import React from 'react';
import { Dropdown } from './components/Dropdown';
export type Item = {
		name: string,
		group?: string
	}
const App = () => {
	const items : Item[] = [
		{name: 'itemOne', group:'group One'},
		{name: 'itemTwo', group:'group One'},
		{name: 'itemThree', group:'group Two'},
		{name: 'itemFour', group:'group Two'},
		{name: 'itemFive'},
		{name: 'itemSix'},
		{name: 'itemSeven', group:'group Three'},
		{name: 'itemEight'}
	];
	return (
		<div>
			<Dropdown items={items} selectionLimit={3}/>
		</div>
	);
};

export default App;
