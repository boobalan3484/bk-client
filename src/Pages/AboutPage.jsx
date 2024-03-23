import React from 'react'
import { content } from '../Utils/Content'
import logo from '../Assets/hero/logo.png'

const AboutPage = () => {

	const { about } = content

	return (

		<section className="pt-14 pb-10" >

			<div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">

				{about.map((item) => (
					<>
						<div className=" mx-auto">
							<div className='max-w-3xl mx-auto flex items-center justify-evenly'>
								<img
									src={logo}
									alt="Float UI logo"
									className='object-cover w-14 md:w-16 lg:w-[72px]'
								/>
								<h3 className="text-blue-700 font-revue-bold text-6xl font-bold sm:text-4xl tracking-wide">
									{item.title}
								</h3>
							</div>

							<p className="max-w-3xl mx-auto mt-3 text-lg text-blue-gray-400">
								{item.head}
							</p>

							<div className='w-full mx-auto mt-8'>
								<p className="mt-3 text-2xl font-semibold tracking-wide text-gray-800">
									About Bohar Siddhar
								</p>
								<p className="mt-3 text-lg text-gray-800 text-justify">
									Among the eighteen Siddhars, <b> Bohar Siddhar </b> is special. He was a disciple of Kalangi Nathar, one of the Navashithas. He was the guru of the famous Pulipani. From the texts composed by Bohar, he lived in <b> period between B.C.500 and B.C.100. </b> Other historical records say the same. He excelled in <b> siddha medicine, yogic arts, alchemy and philosophy </b>. Not only that, he was also a great writer. He excelled in <b> kayakalpa and yoga </b>. He has written many books in <b> Tamil and Chinese </b>.
								</p>
							</div>

						</div>

						< div className="mt-10" >
							<ul className=" space-y-6 " >

								{item.stanza.map((stanza, id) => (
									<li key={id} className="space-y-3">
										<h4 className="text-2xl text-gray-800 font-semibold tracking-wide">
											{stanza.title}
										</h4>
										<p className='text-lg'>
											{stanza.desc}
										</p>
									</li >
								))}

							</ul>

							<div className="max-w-2xl mx-auto mt-10">
								<p className="mt-3 text-lg text-blue-gray-400">
									{item.footer}
								</p>
							</div>
						</div>

					</>
				))}
			</div >
		</section >
	)
}
export default AboutPage