import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/index'
import Card from './components/Card/index'
import Testimonial from './components/Testimonial/index'

import dollarIcon from './assets/img/currency-dollar.svg'
import cloudIcon from './assets/img/migration.svg'

const testimonialImgSrc = 'https://images.unsplash.com/photo-1735424080768-8730f9c8a0e9'
const testimonialName = 'May Andersons'
const testimonialRole = 'CTO'
const testimonialCompany = 'Workcation'

export default function App() {
    return (
        <main>
            <h1>Components Library</h1>
            <section>
                <header className="section-header">Badges</header>
                <div className="badges">
                    <div className="badge-row">
                        <Badge shape="square" color="gray">gray</Badge>
                        <Badge shape="square" color="red">red</Badge>
                        <Badge shape="square" color="yellow">yellow</Badge>
                        <Badge shape="square" color="green">green</Badge>
                        <Badge shape="square" color="blue">blue</Badge>
                        <Badge shape="square" color="indigo">indigo</Badge>
                        <Badge shape="square" color="purple">purple</Badge>
                        <Badge shape="square" color="pink">pink</Badge>
                    </div>
                    <div className="badge-row">
                        <Badge shape="pill" color="gray">gray</Badge>
                        <Badge shape="pill" color="red">red</Badge>
                        <Badge shape="pill" color="yellow">yellow</Badge>
                        <Badge shape="pill" color="green">green</Badge>
                        <Badge shape="pill" color="blue">blue</Badge>
                        <Badge shape="pill" color="indigo">indigo</Badge>
                        <Badge shape="pill" color="purple">purple</Badge>
                        <Badge shape="pill" color="pink">pink</Badge>
                    </div>
                </div>
            </section>
            <section>
                <header className='section-header'>
                    <h2>Banners</h2>
                </header>
                <div className='banners'>
                    <div className='banner-col'>
                        <Banner type='success'>
                            <Banner.Title>Congratulations!</Banner.Title>
                            <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
                        </Banner>
                        <Banner type='warning'>
                            <Banner.Title>Attention</Banner.Title>
                            <Banner.Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                            </Banner.Description>
                        </Banner>
                        <Banner type='danger'>
                            <Banner.Title>There is a problem with your application</Banner.Title>
                            <Banner.Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                            </Banner.Description>
                        </Banner>
                        <Banner type='info'>
                            <Banner.Title>Update available</Banner.Title>
                            <Banner.Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                            </Banner.Description>
                        </Banner>
                        <Banner type='default'>
                            <Banner.Title>Default banner</Banner.Title>
                            <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
                        </Banner>
                    </div>
                    <div className='banner-col'>
                        <Banner type='success'>
                            <Banner.Title>Congratulations!</Banner.Title>
                        </Banner>
                        <Banner type='warning'>
                            <Banner.Title>Attention</Banner.Title>
                        </Banner>
                        <Banner type='danger'>
                            <Banner.Title>There is a problem with your application</Banner.Title>
                        </Banner>
                        <Banner type='info'>
                            <Banner.Title>Update available</Banner.Title>
                        </Banner>
                        <Banner type='default'>
                            <Banner.Title>Default banner</Banner.Title>
                        </Banner>
                    </div>
                </div>
            </section>
            <section>
                <header className='section-header'>
                    <h2>Cards</h2>
                </header>
                <div className='cards'>
                    <Card iconSrc={cloudIcon} type='info'>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
                    </Card>
                    <Card iconSrc={dollarIcon} type='success'>
                        <Card.Title>Card title</Card.Title>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.</Card.Description>
                    </Card>
                </div>
            </section>
            <section>
                <header className='section-header'>
                    <h2>Testimonials</h2>
                </header>
                <div className='testimonials'>
                    <div className='testimonial-row'>
                        <Testimonial>
                            <Testimonial.Headshot imgSrc={testimonialImgSrc} />
                            <Testimonial.Quote
                                name={testimonialName}
                                role={testimonialRole}
                                company={testimonialCompany}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                            </Testimonial.Quote>
                        </Testimonial>
                        <Testimonial>
                            <Testimonial.Quote role="Software Developer">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                            </Testimonial.Quote>
                        </Testimonial>
                    </div>
                    <div className='testimonial-row'>
                        <Testimonial layout='desktop'>
                            <Testimonial.Headshot imgSrc={testimonialImgSrc} />
                            <Testimonial.Quote
                                name="Remy LeBeau"
                                role="Project Manager"
                                company="Gambit"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                            </Testimonial.Quote>
                        </Testimonial>
                    </div>
                    <div className='testimonial-row'>
                        <Testimonial layout='desktop'>
                            <Testimonial.Quote
                                name={testimonialName}
                                role={testimonialRole}
                                company={testimonialCompany}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                            </Testimonial.Quote>
                        </Testimonial>
                    </div>
                </div>
            </section>
        </main>
    )
}