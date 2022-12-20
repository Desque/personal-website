import React, {ReactComponentElement} from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface PageComponent {
    page : any
    pageName : string
}

const Page = (props : PageComponent) => {
    return (
        <div className="m-0 text-primary bg-secondary font-sans">
            <Header/>
            <div className="h-screen">
                <Navigation activePage={props.pageName}/>
                <div className="rounded-lg w-10/12 p-6 m-auto">
                    {props.page}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;