import { Suspense, useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import TechStacks from "./components/TechStack/TechStacks"
import type { Technology } from "./types"

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
            return;
        }
        const newStack = [...selectedStack, tech];
        setSelectedStack(newStack);
    }
    const handleClear = (isClear: boolean) => {
        if(isClear){
            setSelectedStack([]);
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
