import { useState } from 'react';

const Destination = () => {
	const dests = [
		{
			name: 'Moon',
			image: require('../assets/destination/image-moon.png'),
			description:
				'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
			distance: '384,400 km',
			travel: '3 days',
		},
		{
			name: 'Mars',
			image: require('../assets/destination/image-mars.png'),

			description:
				'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
			distance: '225 mil. km',
			travel: '9 months',
		},
		{
			name: 'Europa',
			image: require('../assets/destination/image-europa.png'),
			description:
				'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
			distance: '628 mil. km',
			travel: '3 years',
		},
		{
			name: 'Titan',
			image: require('../assets/destination/image-titan.png'),

			description:
				'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
			distance: '1.6 bil. km',
			travel: '7 years',
		},
	];
	const [toShow, setToShow] = useState(0);
	return (
		<div className='destination page'>
			<div className='left'>
				<h3>
					<span>01</span>
					Pick your destination
				</h3>
				<img src={dests[toShow].image.default} alt='' />
			</div>
			<div className='right'>
				<div className='tabs'>
					{dests.map((des, i) => (
						<button
							onClick={() => setToShow(i)}
							className={i === toShow ? 'active' : ''}>
							{des.name}
						</button>
					))}
				</div>
				<div className='body'>
					<h1>{dests[toShow].name}</h1>
					<p>{dests[toShow].description}</p>
					<hr />
					<div className='details'>
						<div>
							<h6>AVG. DISTANCE</h6>
							<h4>{dests[toShow].distance}</h4>
						</div>
						<div>
							<h6>Est. travel time</h6>
							<h4>{dests[toShow].travel}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
