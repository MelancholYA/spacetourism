import { useState } from 'react';

const Tech = () => {
	const [toShow, setToShow] = useState(0);
	const tech = [
		{
			name: 'Launch vehicle',
			images: {
				portrait: require('../assets/technology/image-launch-vehicle-portrait.jpg'),
				landscape: require('../assets/technology/image-launch-vehicle-landscape.jpg'),
			},
			description:
				"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
		},
		{
			name: 'Spaceport',
			images: {
				portrait: require('../assets/technology/image-spaceport-portrait.jpg'),
				landscape: require('../assets/technology/image-spaceport-landscape.jpg'),
			},
			description:
				'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
		},
		{
			name: 'Space capsule',
			images: {
				portrait: require('../assets/technology/image-space-capsule-portrait.jpg'),
				landscape: require('../assets/technology/image-space-capsule-landscape.jpg'),
			},
			description:
				"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
		},
	];
	return (
		<div className='tech page'>
			<h3>
				<span>03</span>
				SPACE LAUNCH 101
			</h3>
			<div className='container'>
				<div className='tabs'>
					{tech.map((des, i) => (
						<button
							className={i === toShow ? 'active' : ''}
							onClick={() => setToShow(i)}>
							{i + 1}
						</button>
					))}
				</div>
				<div className='text'>
					<h4>THE TERMINOLOGY…</h4>
					<h1>{tech[toShow].name}</h1>
					<p>{tech[toShow].description}</p>
				</div>

				<img
					src={
						window.innerWidth > 780
							? tech[toShow].images.portrait.default
							: tech[toShow].images.landscape.default
					}
					alt=''
				/>
			</div>
		</div>
	);
};

export default Tech;
