import { React, useEffect } from 'react';
import { AboutUs, Chef, Curtain, FindUs, Footer, Gallery, Header, Laurels, SpecialMenu, ArtGallery } from './container';
import { Navbar } from './components';
import { useParams, useNavigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function Main() {
    
    const { langId } = useParams();
    const navigate = useNavigate();


    

useEffect(() => {
    const setEnglish = () => {
        langId ? console.log(null) : navigate(`/eng`)
      }
    setEnglish()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  
    return (
        <div>
            <Curtain />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            {/* <Intro /> */}
            <Laurels />
            <Gallery />
            <ArtGallery />
            <FindUs />
            <Footer />
        </div>
    );
}

export default Main;