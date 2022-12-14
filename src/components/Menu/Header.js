import React from 'react';
import { Nav } from 'react-bootstrap';
import DropdownMenu from './dropdown-menu';
import { Link } from "react-router-dom";
import logo from '../../assets/Nier__Automata_Logo.png';
import SearchBar from "../SearchBar";
export const Header = () => {
	return (
		<Nav
			style={{
				background: '#000',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				fontSize: '1.175rem',
			}}
		>
			
			<Link to="/">
				<img src={logo} width='600' height='100' className='d-inline-block align-top' alt='' />
			</Link>
			<DropdownMenu />
			<SearchBar placeholder="Wyszukaj" data/>
		</Nav>
	);
};
