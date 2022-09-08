import React from 'react';
import { Item } from '../../App';

type ComponentProps = {
    key:string,
    item: Item,
    toggleSelected: (name : string) => void,
    isSelected: boolean
}
const DropdownItem = ({item, toggleSelected, isSelected} : ComponentProps) => {
	return <button className={isSelected ? 'dropdown-selection selected' : 'dropdown-selection'} onClick={() => toggleSelected(item.name)}>{item.name}</button>;
};
export default DropdownItem;