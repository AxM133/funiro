import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { Features } from "./Features/Features";
import { Gallery } from "./Gallery/Gallery";
import { Hero } from "./Hero/Hero";
import { Products } from "./Products/Products";
import { Rooms } from "./Rooms/Rooms";
import { Tips } from "./Tips/Tips";

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Products />
            <Rooms />
            <Tips />
            <Gallery />
            <Footer />
        </>
    )
}

export default HomePage;
