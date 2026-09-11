import { Suspense, useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import TechStacks from "./components/TechStack/TechStacks"
import type { Technology } from "./types"
import { Slide, toast } from "react-toastify"

const technologiesDataPromise = async() => {
    const response = await fetch("/technologies.json");
    const data = await response.json();
    return data;
}

const technologiesPromise = technologiesDataPromise();

function App() {
    const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
    const handleSelectedStack = (tech: Technology, isSelected?: boolean) => {
        if(isSelected) {
            const newStack = selectedStack.filter(t => t.id !== tech.id);
            setSelectedStack(newStack);
            
            // remove message
            toast.error(`${tech.name} removed from stack`, {
            position: "bottom-right", autoClose: 2000,
            hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true,
            progress: undefined, theme: "dark", transition: Slide,
            });
            return;
        }
        const newStack = [...selectedStack, tech];
        setSelectedStack(newStack);

        // add message
        toast.success(`${tech.name} added to stack`, {
        position: "bottom-right", autoClose: 2000,
        hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true,
        progress: undefined, theme: "dark", transition: Slide,
        });
    }
    const handleClear = (isClear: boolean) => {
        if(isClear){
            setSelectedStack([]);

            // stack clear message
            toast.info(`Stack Cleared`, {
            position: "bottom-right", autoClose: 2000,
            hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true,
            progress: undefined, theme: "dark", transition: Slide,
            });
        }
    }
    return (
        <>
            <Nav />
            <Hero />
            <Suspense fallback={<p>Loading...</p> }>
                </Suspense><TechStacks technologiesPromise={technologiesPromise} selectedStack={selectedStack} 
                handleSelectedStack={handleSelectedStack} handleClear={handleClear} />
            <Suspense/>
            {console.log(selectedStack)}
            <Footer />
        </>
    )
}

export default App
