import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './components/Toggle'
import Card from './components/Card'
import Counter from './components/Counter'
import Login from './components/Login'
import UserProvider from './components/UserContext'
import BlogPage from './pages/BlogPage'
import RoutingMainPage from './pages/RoutingMainPage'
import Todo from './components/Todo'
import FetchAPI from './exercises/FetchAPI'

function App() {
  const [count, setCount] = useState(0)
  const contentArray = [
    {
      link: 'cat4.jpeg',
      title: 'Whiskers the Cyber Guardian',
      textContent: `In a city that never slept, where the hum of technology was the heartbeat of life, a cat named Whiskers roamed. Beneath his snowy fur and keen eyes lay a mind tuned to the pulse of the digital realm.
  
      By day, Whiskers seemed just like any other cat, but as night fell, he transformed into a protector of the web, a white hacker determined to keep the virtual world safe from harm.`
    },
    {
      link: 'cat3.jpeg',
      title: 'Shadow the Codebreaker',
      textContent: `In the dimly lit streets of the metropolis, Shadow prowled with purpose. His fur as white as snow, and eyes that gleamed with intelligence, he was a force to be reckoned with in the digital world.
  
      When the city slept, Shadow went to work, his paws dancing across keyboards, breaking codes, and fortifying defenses, ensuring the safety of the cyber streets he called home.`
    },
    {
      link: 'cat2.jpeg',
      title: 'Mittens the Cyber Sentinel',
      textContent: `High above the neon-lit streets, Mittens watched over the city from his rooftop perch. His white fur blended with the moonlight, but it was his sharp mind that truly set him apart.
  
      As darkness fell, Mittens became the city's silent guardian, a white hacker who patrolled the digital highways, dismantling threats and protecting the innocent from the shadows.`
    },
    {
      link: 'cat.jpeg',
      title: 'Snowball the Digital Defender',
      textContent: `In a city where technology ruled, Snowball moved with quiet grace, his white fur a stark contrast against the urban backdrop. 
  
      Night after night, Snowball delved into the depths of cyberspace, defending against the unseen dangers lurking in the code, a white hacker dedicated to maintaining peace in the digital realm.`
    },
  ]

  return (
    <>

      {/* <div className="flex items-center justify-center w-screen">
        <div className="flex gap-10">
          {contentArray.map((content) => (
            <div className="hover:-translate-y-10 transition-all opacity-50 hover:opacity-100">
              <Card {...content} />
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="flex items-center justify-center w-screen">
        <div>
          <div>
            <Counter />
          </div>

          <UserProvider>
            <div className="pt-10">
              <Login />
            </div>
          </UserProvider>
        </div>
      </div> */}

      {/* /////////////////////////////////////////////////////////////////////////// */}


      {/* <BlogPage /> */}
      <div className=" pt-24">

        <FetchAPI />
      </div>

      {/* /////////////////////////////////////////////////////////////////////////// */}

      {/* <RoutingMainPage /> */}


    </>
  )
}

export default App
