import { Hero } from '../components/Hero'
import { Solutions } from '../components/Solutions'
import { Values } from '../components/Values'
import { Team } from '../components/Team'
import { Testimonials } from '../components/Testimonials'
import { SuccessStories } from '../components/SuccessStories'
import { CTA } from '../components/CTA'

export const Home = () => {
    return (
        <>
            <Hero />
            <Solutions />
            <Values />
            <Team />
            <Testimonials />
            <SuccessStories />
            <CTA />
        </>
    )
}
