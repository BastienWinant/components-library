import './App.css'
import Badge from './components/Badge/Badge'

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
        <div className="banners"></div>
      </section>
      <section>
        <header className="section-header">
          <h2>testimonials</h2>
        </header>
      </section>
    </main>
  )
}

export default App
