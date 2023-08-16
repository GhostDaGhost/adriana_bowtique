import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { debuggingLoadingSequence } from "./data/config";

import Home from "./pages/Home";
import Error from "./pages/Error";
import LoadingSequence from "./components/LoadingSequence";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

// APP
const App = () => {
    const [loadingDOM, setLoadingDOMState] = useState(true);
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('currentLanguage') ?? 'EN');

    // TOGGLE LANGUAGES FUNCTION
    const toggleLanguages = () => {
        const newLanguage = currentLanguage === 'EN' ? 'ES' : 'EN';

        // SAVE TO LOCAL STORAGE AND CHANGE THROUGHOUT THE PAGE
        localStorage.setItem('currentLanguage', newLanguage);
        setCurrentLanguage(newLanguage);
    }

    // UPON INITIALIZATION, DISPLAY LOADER FOR A BIT
    useEffect(() => {
        setTimeout(() => setLoadingDOMState(false), 1200);
    }, []);

    // RETURN ROUTES
    return (
        <Router>
            <Routes>
                {debuggingLoadingSequence ?
                    <Route path='/' element={<LoadingSequence />}/>
                :
                    <Route path='/' element={!loadingDOM ? 
                        <Home currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />
                    : 
                        <LoadingSequence />
                    }/>
                }

                <Route path='/home' element={<Home currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />}/>
                <Route path='/products' element={<Products currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />} />
                <Route path='/contact' element={<Contact currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />} />
                <Route path="*" element={<Error currentLanguage={currentLanguage} />} />
            </Routes>
        </Router>
    )
}

export default App;
