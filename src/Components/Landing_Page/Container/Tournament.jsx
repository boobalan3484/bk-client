import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoRibbonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

import { app } from '../../../Utils/firebaseIP';

import {
    getFirestore,
    collection,
    getDocs,
    doc,


} from "firebase/firestore";

const Tournament = () => {

    const db = getFirestore(app);

    const [tournament, setTournament] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            const querySnapshot = await getDocs(collection(db, "Tournament"));
            const tournamentData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTournament(tournamentData);
            // console.log(tournamentData);
        };

        fetchTournaments();
    }, []);


    return (

        <section id='tournament' className="pb-14 pt-24">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl" data-aos="zoom-in">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Tournament
                    </h3>
                    <p className="text-gray-600 mt-3">
                        We organize various competitions in each program and issue dojo certificates to participants.
                    </p>
                </div>

                <div className="mt-8" >
                    <ul className="space-y-4 ">
                        {
                            tournament.map((item, i) => (
                                <li key={i} className="py-5  border-b-2 "
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 400}>
                                    <div>
                                        <div className="justify-between sm:flex">

                                            <div className="flex-1 flex flex-col gap-4">
                                                <h3 className="text-xl font-semibold text-indigo-600 uppercase">
                                                    {item.Tname}
                                                </h3>

                                                <span className="flex items-center text-xs lg:text-sm text-gray-500 uppercase">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                    </svg>
                                                    {item.date} | {item.time}

                                                </span>


                                                <div className="items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">

                                                    <span className="flex items-center gap-3 bg-light-blue-100/30  py-2 px-4 rounded-md">
                                                        <span className='flex items-center gap-2'>
                                                            <IoRibbonSharp />
                                                            <p className='hidden sm:block'>
                                                                Chief Guest -
                                                            </p>
                                                            <p className='text-blue-800 text-xs lg:text-base font-bold capitalize'>
                                                                {item.chiefGuest}
                                                            </p>
                                                        </span>
                                                    </span>
                                                </div>

                                            </div>

                                            <div className="mt-5 flex  space-y-4 text-sm sm:mt-0 sm:space-y-3">

                                                <div className="flex flex-1 flex-col lg:items-center lg:justify-center text-gray-500 gap-2">

                                                    <span className="flex items-center text-gray-500 capitalize">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                        </svg>
                                                        {item.address}, {item.city}, {item.district}
                                                    </span>

                                                    <Link to={`/${'contact'}`} key={i} className='group/a'>
                                                        <span className={`w-36 py-2 flex justify-center items-center gap-1 rounded-full font-semibold text-xs text-green-600 bg-green-50`}>
                                                            Book Now
                                                            <IoIosArrowRoundForward className={`text-lg absolute -translate-x-10 pt-[1px] text-transparent group-hover/a:text-green-600 group-hover/a:translate-x-10 duration-500`} />
                                                        </span>
                                                    </Link>
                                                    <p className='w-36 py-2 flex justify-center items-center gap-1 rounded-full font-semibold text-xs text-red-600 bg-amber-50'>
                                                        &#8377;{item.fees}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}



export default Tournament