import { useEffect, useState } from 'react';

import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';

import getFormattedWeatherData from './services/weatherService';

function App() {
	const [query, setQuery] = useState({ q: 'nagoya' });
	const [units, setUnits] = useState('metric');
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data);
			});
		};

		fetchWeather();
	}, [query, units]);

	const formatBackground = () => {
		if (!weather) {
			return 'from-cyan-700 to-blue-700';
		}

		const threshold = units === 'metric' ? 20 : 68;

		if (weather.temp <= threshold) {
			return 'from-cyan-700 to-blue-700';
		} else {
			return 'from-yellow-700 to-orange-700';
		}
	};

	return (
		<div
			className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}
		>
			<TopButtons setQuery={setQuery} />
			<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

			{weather && (
				<div>
					<TimeAndLocation weather={weather} />
					<TemperatureAndDetails weather={weather} units={units} />

					<Forecast title='Hourly Forecast' items={weather.hourly} />
					<Forecast title='Daily Forecast' items={weather.daily} />
				</div>
			)}
		</div>
	);
}

export default App;
