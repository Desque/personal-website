import React from 'react';
import {BsSearch} from "react-icons/bs";

const SearchBar = () => {
    return (
        <div>
            <div className="flex justify-center pt-5 pb-20">
                <div className="flex justify-start items-center h-2 md:h-6 gap-4 xl:w-6/12 sm:w-8/12 w-11/12 rounded-lg">
                    <h2 className="text-3xl text-primary whitespace-nowrap">Que cherchez-vous ?</h2>
                    <input className="appearance-none w-full p-2 lg:p-5 rounded-lg border-2 border-secondary text-tertiary shadow-3xl focus:outline-none focus:border-tertiary" placeholder="Search any information" />
                    <a className="flex items-center text-secondary p-2 lg:p-5 bg-tertiary border-2 border-tertiary text-2xl rounded-lg shadow-3xl hover:scale-125 hover:cursor-pointer hover:duration-150 active:translate-y-2">
                        <BsSearch className="h-full w-full"></BsSearch>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;