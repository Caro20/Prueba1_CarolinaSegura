import Image from 'next/image'
import { Inter } from 'next/font/google'
import { headers } from 'next/dist/client/components/headers'

const inter = Inter({ subsets: ['latin'] })

function clickOnTheButton(nameOfSection: string) {
  const section = document.getElementById(nameOfSection);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


export default function Home() {
  return (
    <>

      <header>
        
        <button className="menu">Start</button>
        <button onClick={() => clickOnTheButton("about_me_section")}>Personal introduction</button>
        <button className="menu">Completed projects</button>
        <button className="menu">Call to action</button>
        <button className="menu">Contacts and social media</button>

      </header>
      <main>
        <div id='about_me_section'>
          <h1 className='title'>About me</h1>
          <p className='description'>
          My name is Carolina and I work in software development. I studied Computer Systems Engineering at 
          the Universidad Nacional de Costa Rica. I consider the skills I learned in that career to be my main hard skills. 
          However, in this section you will find a link to my LinkedIn profile so that you can learn more about me 
          and discover that I not only love software development, but I also enjoy many other things and 
          have more skills and hobbies. You will be able to learn about my academic background.
          </p>
          <a href="https://www.linkedin.com/in/carolina-segura-cordero-855483212/">Link to LinkedIn</a>
        </div>
        <div>
          <h1 className='title'>Completed projects</h1>

        </div>
        <div>
          <h1 className='title'>Call to action</h1>
          <h2 className='second_title'>To know more about me...</h2>
          <h3 className='third_title'>Look my personal infographic!</h3>
          <a href="/Infografía.pdf">View infographic</a>
        </div>
      </main>



    </>

  )
}
