import './App.css'

import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import uploadIcon from "./assets/img/migration.svg"

function App() {

  return (
    <main>
      <section>
        <header>
          <h2 className="section-title">badges</h2>
        </header>
        <div className="container">
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
        <div className="container">
          <div className="column">
            <Banner className="sucess success-light">
              <Banner.Title>Congratulations!</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner className="warning warning-light">
              <Banner.Title>Attention</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>
            <Banner className="danger danger-light">
              <Banner.Title>There is a problem with your application</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>
            <Banner className="info info-light">
              <Banner.Title>Update available</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
          </div>
          <div className="column">
            <Banner className="sucess success-light">
              <Banner.Title>Congratulations!</Banner.Title>
            </Banner>
            <Banner className="warning warning-light">
              <Banner.Title>Attention</Banner.Title>
            </Banner>
            <Banner className="danger danger-light">
              <Banner.Title>There is a problem with your application</Banner.Title>
            </Banner>
            <Banner className="info info-light">
              <Banner.Title>Update available</Banner.Title>
            </Banner>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2 className="section-title">cards</h2>
        </header>
      </section>
      <div className="container">
        <Card logoSrc={uploadIcon}>
          <Card.Title>easy deployment</Card.Title>
          <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
        </Card>
      </div>
    </main>
  )
}

export default App
