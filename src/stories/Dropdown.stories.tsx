import React from 'react';
import { Dropdown } from '../components/Dropdown';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default{
	title:'Dropdown',
	component: Dropdown
} as ComponentMeta<typeof Dropdown>;
export const Main : ComponentStory<typeof Dropdown> = () => {
	return <Dropdown items={[{name: 'itemOne', group:'one'}]}></Dropdown>;
};