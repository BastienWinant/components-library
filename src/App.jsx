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
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
            <Badge className="square">badge</Badge>
          </div>
          <div className="row">
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
            <Badge className="pill">badge</Badge>
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
