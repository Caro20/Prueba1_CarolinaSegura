import Image from 'next/image'
import { Inter } from 'next/font/google'
import { headers } from 'next/dist/client/components/headers'
import Carousel from '../components/carousel';
import Repos from '../components/repository';
import { AppProvider } from '../components/provider';
//import { Carousel } from 'react-bootstrap';

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
        <button onClick={() => clickOnTheButton("completedProjects_section")}>Completed projects</button>
        <button onClick={() => clickOnTheButton("callToAction_section")}>Call to action</button>
        <button onClick={() => clickOnTheButton("footer_section")}>Contacts and social media</button>

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
          <a href="https://www.linkedin.com/in/carolina-segura-cordero-855483212/" target='_blank'>Link to LinkedIn</a>
        </div>
        <div id='completedProjects_section'>
          <h1 className='title'>Completed projects</h1>
          <AppProvider>
            <div>
              <Carousel />
              <Repos />
            </div>
          </AppProvider>
        </div>
        <div id='callToAction_section'>
          <h1 className='title'>Call to action</h1>
          <h2 className='second_title'>To know more about me...</h2>
          <h3 className='third_title'>Look my personal infographic!</h3>
          <a href="/Infografía.pdf">View infographic</a>
        </div>
        <div id='footer_section'>
          <footer>
            <h1 className='title'>Contacts and social media</h1>
            <a href="https://wa.me/50688351690/" target='_blank'>Contact me on WhatsApp</a>
            <div>
              <a className='email'>My e-mail: seguracorderocarolina212@gmail.com</a>
            </div>
          </footer>
        </div>
      </main>



    </>

  );
}
