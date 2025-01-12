import './App.css'

import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import uploadIcon from "./assets/img/migration.svg"
import Testimonial from './components/Testimonial/index'

function App() {

  return (
    <main>
      <section>
        <header>
          <h2 className="section-title">badges</h2>
        </header>
        <div className="badges-container">
          <div className="row">
            <Badge className="square body-light">badge</Badge>
            <Badge className="square danger-light">badge</Badge>
            <Badge className="square warning-light">badge</Badge>
            <Badge className="square success-light">badge</Badge>
            <Badge className="square info-light">badge</Badge>
            <Badge className="square indigo-light">badge</Badge>
            <Badge className="square purple-light">badge</Badge>
            <Badge className="square pink-light">badge</Badge>
          </div>
          <div className="row">
            <Badge className="pill body-light">badge</Badge>
            <Badge className="pill danger-light">badge</Badge>
            <Badge className="pill warning-light">badge</Badge>
            <Badge className="pill success-light">badge</Badge>
            <Badge className="pill info-light">badge</Badge>
            <Badge className="pill indigo-light">badge</Badge>
            <Badge className="pill purple-light">badge</Badge>
            <Badge className="pill pink-light">badge</Badge>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2 className="section-title">banners</h2>
        </header>
        <div className="banners-container">
          <div className="column">
            <Banner type="success">
              <Banner.Title>Congratulations!</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner type="warning">
              <Banner.Title>Attention</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>
            <Banner type="danger">
              <Banner.Title>There is a problem with your application</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>
            <Banner type="info">
              <Banner.Title>Update available</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
          </div>
          <div className="column">
            <Banner type="success">
              <Banner.Title>Congratulations!</Banner.Title>
            </Banner>
            <Banner type="warning">
              <Banner.Title>Attention</Banner.Title>
            </Banner>
            <Banner type="danger">
              <Banner.Title>There is a problem with your application</Banner.Title>
            </Banner>
            <Banner type="info">
              <Banner.Title>Update available</Banner.Title>
            </Banner>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2 className="section-title">cards</h2>
        </header>
        <div>
          <Card logoSrc={uploadIcon}>
            <Card.Title>easy deployment</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
          </Card>
        </div>
      </section>
      <section>
        <header>
          <h2 className="section-title">testimonials</h2>
        </header>
        <div className='testimonials-container'>
          <div>
            <Testimonial imgSrc={"https://images.unsplash.com/photo-1720345490242-8f12cc6ea6bb"}></Testimonial>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
