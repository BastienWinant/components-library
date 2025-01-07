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
        <div>
          <div>
            <Badge className="square">badge</Badge>
          </div>
          <div>
            <Badge className="pill">badge</Badge>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
