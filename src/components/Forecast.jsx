import React from 'react';
import { iconUrlFromCode } from '../services/weatherService';

const Forecast = ({ title, items }) => {
	return (
		<div>
			<div className='flex items-center justify-start mt-6'>
				<p className='text-white font-medium uppercase'>{title}</p>
			</div>
			<hr className='my-2' />
			<div className='flex flex-row items-center justify-between text-white'>
				{items.map((item) => (
					<div
						className='flex flex-col items-center justify-center'
						key={item.title}
					>
						<p className='font-light text-sm'>{item.title}</p>
						<img
							src={iconUrlFromCode(item.icon)}
							alt='Weather'
							className='w-12 my-1'
						/>
						<p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
					</div>
				))}

				{/* <div className='flex flex-col items-center justify-center'>
					<p className='font-light text-sm'>04:30 PM</p>
					<img
						src='http://openweathermap.org/img/wn/01d@2x.png'
						alt='Weather'
						className='w-12 my-1'
					/>
					<p className='font-medium'>22°C</p>
				</div>

				<div className='flex flex-col items-center justify-center'>
					<p className='font-light text-sm'>04:30 PM</p>
					<img
						src='http://openweathermap.org/img/wn/01d@2x.png'
						alt='Weather'
						className='w-12 my-1'
					/>
					<p className='font-medium'>22°C</p>
				</div>

				<div className='flex flex-col items-center justify-center'>
					<p className='font-light text-sm'>04:30 PM</p>
					<img
						src='http://openweathermap.org/img/wn/01d@2x.png'
						alt='Weather'
						className='w-12 my-1'
					/>
					<p className='font-medium'>22°C</p>
				</div>

				<div className='flex flex-col items-center justify-center'>
					<p className='font-light text-sm'>04:30 PM</p>
					<img
						src='http://openweathermap.org/img/wn/01d@2x.png'
						alt='Weather'
						className='w-12 my-1'
					/>
					<p className='font-medium'>22°C</p>
				</div> */}
			</div>
		</div>
	);
};

export default Forecast;
