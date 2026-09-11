import { Suspense } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import TechStacks from "./components/TechStack/TechStacks"

const technologiesDataPromise = async() => {
    const response = await fetch("/technologies.json");
    const data = await response.json();
    return data;
}

const technologiesPromise = technologiesDataPromise();

function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Suspense fallback={<p>Loading...</p> }>
                </Suspense><TechStacks technologiesPromise={technologiesPromise} />
            <Suspense/>
            <Footer />
        </>
    )
}

export default App
