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
        <div className="m-0 w-screen text-primary bg-bio  font-sans">
            <Header/>
            <div className={props.pageName !== "home" ? "pt-[5vh] bg-"+props.pageName : "pt-[5vh] bg-gradient"}>
                <div className="min-h-screen w-[90vw] xl:p-6 m-auto">
                    {props.page}
                </div>
                <div className="bottom-0 pb-[1vh] text-center sticky">
                    <Navigation activePage={props.pageName} />
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Page;