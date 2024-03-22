// import React from "react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowRoundUp } from "react-icons/io";

import { content } from '../Utils/Content'

import NotFoundPage from "./NotFoundPage";


const ProgramLayout = () => {

	// const { url } = useParams()

	// const { programData } = content

	// const program = programData.find(program => program.url === url);


	const { url } = useParams();
	const { programData } = content;
	const [program, setProgram] = useState({});

	useEffect(() => {
		const programFilter = programData.filter((item) =>
			item.url === url
		);
		setProgram(programFilter[0]);
	}, [url, programData]);

	if (!program) {
		return <NotFoundPage />
	}


	return (
		<section className="h-full">
			<div className=" pt-10 pb-6 max-w-screen-xl w-full lg:w-4/5 mx-auto px-4 md:px-8 items-center lg:flex flex-col ">
				{/* <div className="pt-5 pb-14 gap-x-12 "> */}

				<img
					className="h-[150px] lg:h-[200px] object-contain mx-auto"
					src={program.img1}
					alt=" "
					data-aos='zoom-in'
					data-aos-delay='0'
				/>

				<h3 className="text-indigo-600 uppercase tracking-wide my-4 m-auto lg:text-3xl font-bold  text-center md:text-xl sm:text-xl"
					data-aos='fade-down' data-aos-delay='600'
				>
					{program.title}
				</h3>

				<p className=" my-3 m-auto lg:text-xl font-semibold   text-center text-base"
					data-aos='fade-down' data-aos-delay='1400'
				>
					{program.description}
				</p>

				<div className="m-auto my-4 lg:my-0 flex justify-between items-center flex-nowrap lg:flex-row flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
					<p className="lg:text-xl w-full lg:w-4/5 text-justify md:text-base "
						data-aos='fade-up' data-aos-delay='1400'
					>
						{program.para1}
					</p>
					<div className=" h-36 lg:h-52">
						<img
							className="w-full h-full"
							src={program.img2}
							alt=" "
							data-aos='zoom-in' data-aos-delay='1800'
						/>
					</div>
				</div>

				{/* <p className="w-4/5 my-3 m-auto lg:text-xl font-semibold  text-center text-base">
						{program.para3}
					</p> */}

				<div className="my-8 px-1  text-center "
					data-aos='zoom-in' data-aos-delay='2000'>
					<Link to={`/${'contact'}`} className="group/a text-blue-gray-50 group-hover/a:text-white  bg-indigo-600 hover:bg-indigo-500 py-3 px-6 rounded-full duration-150 active:bg-indigo-300 tracking-wide font-medium">
						Enquire Now
						<span className='inline-block'>
							<IoIosArrowRoundUp className=' rotate-45 text-lg transform translate-x-0 translate-y-[5px] group-hover/a:translate-y-[2px] group-hover/a:translate-x-[3px] transition-all duration-150' />
						</span>
					</Link>
				</div>

				{/* <div className="m-auto flex justify-evenly items-center flex-nowrap lg:flex-row flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
						<div className="lg:w-[15%] h-[150px] lg:h-[200px] md:w-[20%] sm:w-[20%]">
							<img
								className="w-full h-full"
								src={program.img3}
								alt=" "
							/>
						</div>
						<p className="lg:text-xl my-3 w-4/5 text-justify text-base ">
							{program.para4}
						</p>
					</div> */}

				{/* </div> */}
			</div>
		</section>
	);
};

export default ProgramLayout;
