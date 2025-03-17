import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import About5 from "@/components/sections/About5"
import About6 from "@/components/sections/About6"
import About7 from "@/components/sections/About7"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
import Hero4 from "@/components/sections/Hero4"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Service3 from "@/components/sections/Service3"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={4} footerStyle={4}>
                <Hero4 />
                {/* <Marque1 /> */}
                <About4 />
                <About5 />
                {/* <Brand1 /> */}
                <Service3 />
                {/* <Achievement1 /> */}
                <About6 />
                <About7 />
                <Project1 />
                <Marque2 />
                <Testimonial1 />
                <Team1 />
                <Pricing1 />
                <Faq1 />
                <News1 />
                <Cta1 />
            </Layout>
        </>
    )
}