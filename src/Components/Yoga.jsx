import React from "react";
import YogaHeader from "../yogaheader.jpg";
import YogaSection from "../yoga1.jpg";

const Yoga = () => {
	return (
		<>
			<div className="w-full h-screen ">
				<div className="h-[200px] w-full">
					<img
						className="h-[200px] object-contain w-full"
						src={YogaHeader}
						alt="yoga"
					/>
				</div>
				<div className="w-full  my-4">
					<p className="w-[80%]  m-auto lg:text-2xl font-semibold  text-center md:text-xl sm:text-xl">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam
						molestias eum ratione commodi inventore assumenda exercitationem
						atque necessitatibus, iusto, amet, expedita doloremque alias.
						Voluptatum facilis voluptatem fugiat soluta in nemo eaque recusandae
						maxime exercitationem! Atque blanditiis, voluptatem facere dolores
						minima asperiores repellendus ratione doloremque!
					</p>
				</div>
				<div className="w-full my-4 ">
					<div className="w-[100%] m-auto flex justify-evenly items-center flex-nowrap lg:flex-row md:flex-col sm:flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
						<p className="lg:text-2xl w-[80%] text-center md:text-xl ">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
							veniam molestias eum ratione commodi inventore assumenda
							exercitationem atque necessitatibus, iusto, amet, expedita
							doloremque alias. Voluptatum facilis voluptatem fugiat soluta in
							nemo eaque recusandae maxime exercitationem! Atque blanditiis,
							voluptatem facere dolores minima asperiores repellendus ratione
							doloremque!
						</p>
						<div className="lg:w-[15%] h-[200px] md:w-[20%]">
							<img
								className="w-[full] h-full"
								src={YogaSection}
								alt="yogaboy"
							/>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<p className="w-[80%]  m-auto lg:text-2xl font-semibold  text-center md:text-xl sm:text-xl">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam
						molestias eum ratione commodi inventore assumenda exercitationem
						atque necessitatibus, iusto, amet, expedita doloremque alias.
						Voluptatum facilis voluptatem fugiat soluta in nemo eaque recusandae
						maxime exercitationem! Atque blanditiis, voluptatem facere dolores
						minima asperiores repellendus ratione doloremque!
					</p>
				</div>
				<div className="w-full my-4 ">
					<div className="w-[100%] m-auto flex justify-evenly items-center flex-nowrap lg:flex-row md:flex-col sm:flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
						<div className="lg:w-[15%] h-[200px] md:w-[20%] sm:w-[20%]">
							<img
								className="w-[full] h-full"
								src={YogaSection}
								alt="yogaboy"
							/>
						</div>
						<p className="lg:text-2xl w-[80%] text-center md:text-xl ">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
							veniam molestias eum ratione commodi inventore assumenda
							exercitationem atque necessitatibus, iusto, amet, expedita
							doloremque alias. Voluptatum facilis voluptatem fugiat soluta in
							nemo eaque recusandae maxime exercitationem! Atque blanditiis,
							voluptatem facere dolores minima asperiores repellendus ratione
							doloremque!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Yoga;
