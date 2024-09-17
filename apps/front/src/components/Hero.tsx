import {FC} from "react";

const Hero: FC = () => {
    return (
        <div className="flex items-center gap-y-14 lg:gap-x-14 flex-wrap lg:flex-nowrap">
            <h2 className="font-extralight text-6xl sm:text-5xl lg:text-7xl tracking-tight lg:text-right text-white w-full">
                Test technique <span className="font-extrabold">HelloWork</span>
            </h2>

            <div className="flex flex-2 flex-col gap-y-5 w-full">
                <div className="flex flex-col gap-y-2 dark:text-slate-400">
                    <p className="font-bold dark:text-slate-300">Cette application doit :</p>
                    <ul className="list-disc list-outside text-start">
                        <li>{`Permettre de récupérer de manière sécurisée les offres emploi sur la ville de Bordeaux à
                            partir de l'API de Jobijoba`}
                        </li>
                        <li>{`Proposer une page (stylisée avec un peu de CSS) qui présente ces offres et permet d’y
                            postuler (via l’URL de redirection)`}
                        </li>
                        <li>Proposer une pagination</li>
                    </ul>
                </div>
               {/* <form className="w-full">
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only text-white">Rechercher</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 "
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0 focus:ring-sky-500"
                               placeholder="Quel emploi recherchez-vous sur Bordeaux ?" required/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Rechercher
                        </button>
                    </div>
                </form>*/}
            </div>
        </div>
    );
}

export default Hero;