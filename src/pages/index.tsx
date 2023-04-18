import Image from 'next/image'
import { Inter } from 'next/font/google'
import { headers } from 'next/dist/client/components/headers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <header>

        <a className="menu">Start</a>
        <a className="menu">Personal introduction</a>
        <a className="menu">Completed projects</a>
        <a className="menu">Call to action</a>
        <a className="menu">Contacts and social media</a>

      </header>
      <main>

      </main>



    </>

  )
}
