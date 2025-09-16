import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import CtaSection from "@/components/sections/home1/CtaSection"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Team from "@/components/sections/home1/Team"
import Appoinment from "@/components/sections/home1/Appoinment"
import Faq from "@/components/sections/home1/Faq"

export default function Home() {

    return (
        <>
        <div className="dark-version">
            <Layout>
                <Banner />
                <CtaSection />
                <About />
                <Service />
                <Team />
                <Appoinment />
                <Faq />
            </Layout>
        </div>
        </>
    )
}