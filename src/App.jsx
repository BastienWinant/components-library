import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import Tooltip from './components/Tooltip'
import uploadIcon from './assets/img/migration.svg'
import dollarIcon from './assets/img/currency-dollar.svg'

function App() {
  return (
    <main>
      <h1>Components library</h1>
      <section>
        <header className="section-header">
          <h2>badges</h2>
        </header>
        <div className="badges">
          <div className="badge-row">
            <Badge color="gray" shape="square">badge</Badge>
            <Badge color="red" shape="square">badge</Badge>
            <Badge color="yellow" shape="square">badge</Badge>
            <Badge color="green" shape="square">badge</Badge>
            <Badge color="blue" shape="square">badge</Badge>
            <Badge color="indigo" shape="square">badge</Badge>
            <Badge color="purple" shape="square">badge</Badge>
            <Badge color="pink" shape="square">badge</Badge>
          </div>
          <div className="badge-row">
            <Badge color="gray" shape="pill">badge</Badge>
            <Badge color="red" shape="pill">badge</Badge>
            <Badge color="yellow" shape="pill">badge</Badge>
            <Badge color="green" shape="pill">badge</Badge>
            <Badge color="blue" shape="pill">badge</Badge>
            <Badge color="indigo" shape="pill">badge</Badge>
            <Badge color="purple" shape="pill">badge</Badge>
            <Badge color="pink" shape="pill">badge</Badge>
          </div>
        </div>
      </section>
      <section>
        <header className="section-header">
          <h2>banners</h2>
        </header>
        <div className="banners">
          <div className='banner-column'>
            <Banner status="success">
              <Banner.Title>Congratulations!</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner status="warning">
              <Banner.Title>Attention</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>
            <Banner status="danger">
              <Banner.Title>There is a problem with your application</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>
            <Banner status="info">
              <Banner.Title>Update available</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
          </div>
          <div className='banner-column'>
          <Banner status="success">
              <Banner.Title>Congratulations!</Banner.Title>
            </Banner>
            <Banner status="warning">
              <Banner.Title>Attention</Banner.Title>
            </Banner>
            <Banner status="danger">
              <Banner.Title>There is a problem with your application</Banner.Title>
            </Banner>
            <Banner status="info">
              <Banner.Title>Update available</Banner.Title>
            </Banner>
          </div>
        </div>
      </section>
      <section>
        <header className="section-header">
          <h2>Cards</h2>
        </header>
        <div className='cards'>
          <Card iconSrc={uploadIcon} color="blue">
            <Card.Title>easy deployment</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
          </Card>
          <Card iconSrc={dollarIcon} color="indigo">
            <Card.Title>pricing</Card.Title>
            <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum pariatur libero distinctio nisi beatae dolorum.</Card.Text>
          </Card>
        </div>
      </section>
      <section>
        <header className="section-header">
          <h2>Tooltip</h2>
        </header>
        <div className="tooltips">
          <Tooltip
            title="Lorem ipsum"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
          >
            <button className='btn'>hover over me</button>
          </Tooltip>
        </div>
      </section>
    </main>
  )
}

export default App
