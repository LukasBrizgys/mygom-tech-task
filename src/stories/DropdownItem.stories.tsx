import { useState } from '@storybook/addons';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Item } from '../App';
import DropdownItem from '../components/Dropdown/DropdownItem';

export default {
	title:'Dropdown item',
	component: DropdownItem
};
export const Main : ComponentStory<typeof DropdownItem> = () => {
	const key = 'item';
	const [item] = useState<Item>({name: 'item', group:'group'});
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const toggleSelected = () => {
		setIsSelected(!isSelected);
	};
	return <DropdownItem key={key} item={item} isSelected={isSelected} toggleSelected={toggleSelected}></DropdownItem>;
};