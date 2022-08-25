import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
	const [city, setCity] = useState('');

	const handleSearchClick = () => {
		if (city !== '') {
			setQuery({ q: city });
		}
	};

	const handleLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;

				setQuery({ lat, lon });
			});
		}
	};

	const handleUnitChange = (e) => {
		const selectedUnit = e.currentTarget.name;
		if (units !== selectedUnit) {
			setUnits(selectedUnit);
		}
	};

	return (
		<div className='flex flex-row justify-center my-6'>
			<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
				<input
					type='text'
					placeholder='Search...'
					value={city}
					onChange={(e) => setCity(e.currentTarget.value)}
					className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
				/>
				<UilSearch
					size={25}
					onClick={handleSearchClick}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
				/>
				<UilLocationPoint
					size={25}
					onClick={handleLocationClick}
					className='text-white cursor-pointer transition ease-out hover:scale-125'
				/>
			</div>
			<div className='flex flex-row w-1/4 items-center justify-center'>
				<button
					name='metric'
					onClick={handleUnitChange}
					className='text-xl text-white font-light transition ease-out hover:scale-125'
				>
					°C
				</button>
				<p className='text-xl text-white mx-1'>|</p>
				<button
					name='imperial'
					onClick={handleUnitChange}
					className='text-xl text-white font-light transition ease-out hover:scale-125'
				>
					°F
				</button>
			</div>
		</div>
	);
}

export default Inputs;
