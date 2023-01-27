import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface PageComponent {
    page : any
    pageName : string
}

const Page = (props : PageComponent) => {

    return (
        <div className="m-0 w-full text-primary font-sans">
            <Header/>
            <div className="pt-20 bg-gradient">
                <div className="min-h-screen rounded-lg bg-secondary bg-opacity-40 md:p-64 lg:w-11/12 xl:p-6 m-auto">
                    {props.page}
                </div>
                <div className="bottom-0 pb-6 mt-16 text-center sticky">
                    <Navigation activePage={props.pageName} />
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Page;