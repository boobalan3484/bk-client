import React from 'react'

const AboutPage = () => {
  return (
<section className="h-full">
			<div className=" pt-10 pb-6 max-w-screen-xl w-full lg:w-4/5 mx-auto px-4 md:px-8 items-center lg:flex flex-col ">
				{/* <div className="pt-5 pb-14 gap-x-12 "> */}

				<img
					className="h-[150px] lg:h-[200px] object-contain mx-auto"
					src={".."}
					alt="not found "
					data-aos='zoom-in'
					data-aos-delay='0'
				/>

				<h3 className="text-indigo-600 uppercase tracking-wide my-4 m-auto lg:text-3xl font-bold  text-center md:text-xl sm:text-xl"
					data-aos='fade-down' data-aos-delay='600'
				>
Lorem ipsum dolor sit.				</h3>

				<p className=" my-3 m-auto lg:text-xl font-semibold   text-center text-base"
					data-aos='fade-down' data-aos-delay='1400'
				>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorem voluptatum eveniet eius error. Debitis labore aliquam sapiente temporibus officia magni, quod suscipit, quasi consectetur esse quaerat sit voluptate aspernatur.				</p>

				<div className="m-auto my-4 lg:my-0 flex justify-between items-center flex-nowrap lg:flex-row flex-col md:gap-4 sm:gap-4 lg:gap-0 ">
					<p className="lg:text-xl w-full lg:w-4/5 text-justify md:text-base "
						data-aos='fade-up' data-aos-delay='1400'
					>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iste quos at adipisci doloribus aspernatur ratione necessitatibus ea accusamus aperiam ullam omnis odit ex, laboriosam iure, natus, voluptatem unde cupiditate?					</p>
					<div className=" h-36 lg:h-52">
						<img
							className="w-full h-full"
							src={"..."}
							alt=" "
							data-aos='zoom-in' data-aos-delay='1800'
						/>
					</div>
				</div>

			

				
			</div>
		</section>  )
}

export default AboutPage