import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

interface PageComponent {
    page : any
    pageName : string
}

const Page = (props : PageComponent) => {

    return (
        <div className="m-0 w-full text-primary font-sans">
            <Header/>
            <div className="min-h-screen pt-20 pb-20 bg-secondary">
                <Navigation activePage={props.pageName}/>
                <SearchBar/>
                <div className="rounded-lg w-10/12 p-6 m-auto">
                    {props.page}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;