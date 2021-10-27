import { useState } from 'react';

const Crew = () => {
	const [toShow, setToShow] = useState(0);
	const crew = [
		{
			name: 'Douglas Hurley',
			images: require('../assets/crew/image-douglas-hurley.png'),
			role: 'Commander',
			bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
		},
		{
			name: 'Mark Shuttleworth',
			images: require('../assets/crew/image-mark-shuttleworth.png'),
			role: 'Mission Specialist',
			bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
		},
		{
			name: 'Victor Glover',
			images: require('../assets/crew/image-victor-glover.png'),
			role: 'Pilot',
			bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
		},
		{
			name: 'Anousheh Ansari',
			images: require('../assets/crew/image-anousheh-ansari.png'),
			role: 'Flight Engineer',
			bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
		},
	];
	return (
		<div className='crew page'>
			<div className='text'>
				<h3>
					<span>02</span>
					MEET YOUR CREW
				</h3>
				<div className='details'>
					<h2>{crew[toShow].role}</h2>
					<h1>{crew[toShow].name}</h1>
					<p>{crew[toShow].bio}</p>
				</div>
				<div className='tabs'>
					{crew.map((des, i) => (
						<button
							className={i === toShow ? 'active' : ''}
							onClick={() => setToShow(i)}></button>
					))}
				</div>
			</div>
			<img src={crew[toShow].images.default} alt='' />
		</div>
	);
};

export default Crew;
