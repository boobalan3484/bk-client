import React from "react";
import { useParams } from 'react-router-dom';
import { content } from '../Utils/Content'
import NotFoundPage from "./NotFoundPage";


const ProgramLayout = () => {

	const { url } = useParams()

	const { programData } = content

	const program = programData.find(program => program.url === url);

	if (!program) {
		return <> <NotFoundPage /> </>
	}

	return (
		<>
			<div className="w-full h-screen ">
				<div className="h-[200px] w-full">
					<img
						className="h-[200px] object-contain w-full"
						src={program.img1}
						alt="yoga"
					/>
				</div>

				<div className="w-full  my-4">
					<p className="w-[80%]  m-auto lg:text-2xl font-semibold  text-center md:text-xl sm:text-xl">
						{program.title}
					</p>
				</div>
				<div className="w-full  my-4">
					<p className="w-[80%]  m-auto lg:text-2xl font-semibold  text-center md:text-xl sm:text-xl">
						{program.description}
					</p>
				</div>

				<div className="w-full my-4 ">
					<div className="w-[100%] m-auto flex justify-evenly items-center flex-nowrap lg:flex-row md:flex-col sm:flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
						<p className="lg:text-2xl w-[80%] text-center md:text-xl ">
							{program.para2}
						</p>
						<div className="lg:w-[15%] h-[200px] md:w-[20%]">
							<img
								className="w-[full] h-full"
								src={program.img2}
								alt="yogaboy"
							/>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<p className="w-[80%]  m-auto lg:text-2xl font-semibold  text-center md:text-xl sm:text-xl">
						{program.para3}
					</p>
				</div>
				<div className="w-full my-4 ">
					<div className="w-[100%] m-auto flex justify-evenly items-center flex-nowrap lg:flex-row md:flex-col sm:flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
						<div className="lg:w-[15%] h-[200px] md:w-[20%] sm:w-[20%]">
							<img
								className="w-[full] h-full"
								src={program?.img3}
								alt="yogaboy"
							/>
						</div>
						<p className="lg:text-2xl w-[80%] text-center md:text-xl ">
							{program.para4}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProgramLayout;
