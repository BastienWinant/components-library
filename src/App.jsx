import { useState } from 'react'
import './App.css'

import Badge from "./components/Badge/Badge"

function App() {

  return (
    <main>
      <section>
        <header>
          <h2>badges</h2>
        </header>
        <div className="container">
          <div className="row">
            <Badge className="square body-light">badge</Badge>
            <Badge className="square danger-light">badge</Badge>
            <Badge className="square warning-light">badge</Badge>
            <Badge className="square success-light">badge</Badge>
            <Badge className="square primary-light">badge</Badge>
            <Badge className="square indigo-light">badge</Badge>
            <Badge className="square purple-light">badge</Badge>
            <Badge className="square pink-light">badge</Badge>
          </div>
          <div className="row">
            <Badge className="pill body-light">badge</Badge>
            <Badge className="pill danger-light">badge</Badge>
            <Badge className="pill warning-light">badge</Badge>
            <Badge className="pill success-light">badge</Badge>
            <Badge className="pill primary-light">badge</Badge>
            <Badge className="pill indigo-light">badge</Badge>
            <Badge className="pill purple-light">badge</Badge>
            <Badge className="pill pink-light">badge</Badge>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2>banners</h2>
        </header>
      </section>
      <section>
        <header>
          <h2>cards</h2>
        </header>
      </section>
    </main>
  )
}

export default App
