import React, { useEffect, useRef, useState} from 'react';
import { Item } from '../../App';
import '../../styles/style.scss';
import DropdownItem from './DropdownItem';
type ComponentProps = {
	items: Item[],
	selectionLimit?: number,
}
export const Dropdown = ({items, selectionLimit} : ComponentProps) => {
	const dropdownEl = useRef<HTMLDivElement>(null);
	const [dropDownToggle, setDropDownToggle] = useState<boolean>(false);
	const [selected, setSelected] = useState<string[]>([]);
	const groups : Set<string> = new Set();
	items.forEach((item) => {
		if(item.group){
			groups.add(item.group);
		}
	});
	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		() =>{
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);
	/**
	 * function takes array of selections and checks if provided limit is reached
	 * @param selectionArray Array of selected value
	 * @returns true if limit is reached, if not
	 */
	const isLimitReached = (selectionArray : string[]) : boolean => {
		return selectionLimit && selectionLimit > selectionArray.length ? false : true;
	};
	/**
	 * Function takes mouse event as parameter, if click was outside dropdown, it closes dropdown element
	 * @param event Mouse click event
	 */
	const handleClickOutside = (event : MouseEvent) => {
		if(dropdownEl.current && !dropdownEl.current.contains(event.target as Node)) setDropDownToggle(false);
	};
	/**
	 * Function takes name as a parameter and removes it from array if already present,
	 * or adds it to array
	 * @param name selection name
	 */
	const toggleSelected = (name: string) : void => {

		if(selected.includes(name)){
			setSelected(selected.filter((item : string) => item !== name));
		}else {
			!isLimitReached(selected) && setSelected([...selected, name]);
			
		}
	};
	return (
		<div className="dropdown-container" ref={dropdownEl}>
			<input onFocus={() => setDropDownToggle(true)} readOnly type="text" value={selected.toString()}></input>
			{dropDownToggle && <div className="dropdown">
				{
					Array.from(groups).map((group : string) => (
						<div className="group-items" key={group}>
							<h3 className="title">{group}</h3>
							{
								items.filter((item : Item) => item.group === group).map((filteredItem : Item) => (
									<DropdownItem key={filteredItem.name} isSelected={selected.includes(filteredItem.name)} item={filteredItem} toggleSelected={toggleSelected}/>
								))
							}
						</div>
					))
				}
				{items.some((item) => !item.group) &&
				<div className="group-items">
					<h3 className="title">Not groupped</h3>
					{items.filter((item : Item) => (!item.group)).map((filteredItem : Item) => (
						<DropdownItem key={filteredItem.name} item={filteredItem} isSelected={selected.includes(filteredItem.name)} toggleSelected={toggleSelected}></DropdownItem>
					))}
				</div>
				}
				
			</div>	}
		</div>
	);
};
