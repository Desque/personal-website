import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface PageComponent {
    page : any
    pageName : string
}

const Page = (props : PageComponent) => {
    console.log(props.pageName)
    return (
        <div className="m-0 w-full text-primary bg-bio  font-sans">
            <Header/>
            <div className={props.pageName !== "home" ? "pt-[55px] bg-"+props.pageName : "pt-[55px] bg-gradient"}>
                <div className="min-h-screen w-11/12 xl:p-6 m-auto">
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