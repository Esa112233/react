"use client";
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube, AiFillGithub} from 'react-icons/ai'
import {useState} from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : "" }>
      <Head>
        <title>Hello</title>
        <meta name='description' content='generated by'>
          <link rel='icon' href='/favicon.ico'/>
        </meta>
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons text dark:text-pink-400'>Esa Abuzar</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl dark:text-white'/></li>
        
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className={darkMode ? ' text-7xl text-pink-400 font-large' : 'text-7xl text-teal-600 font-large'}>Hello, I'm Esa </h2>
            <h3 className=' text-2xl py-2 dark:text-white'>Computer Engineering Co-op Student</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 dark:text-white'>Check out my <a className={darkMode ? ' bg-gradient-to-r from-pink-500 to-fuchsia-300 bg-cyan-500 text-white px-4 py-2 rounded-md' : 'bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md'} href='#'>Resume!</a></p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 dark:text-pink-400 text-teal-600'>
            <a target='_blanck' href='https://www.linkedin.com/in/esa-abuzar/'>
              <AiFillLinkedin/>
              </a>
            <a target='_blanck' href='https://github.com/Esa112233/'>
            <AiFillGithub/>
            </a>
          </div>
          <section>
          <div className='mb-90 pt-96'>
             <h3 className="text-3xl py-1 text-black dark:text-white pt-20">About Me</h3>
             <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I started my undergraduate degree as an Accounting major but realized it wasn't 
              the right fit for me so while finding a new career path, I decided to learn python.
              Although I started exploring software development relatively late, 
              I have already built a number of applications and websites that I'm really proud of.
              I'm now a Statistics and Math double major because I would love to work with 
              <span className='text-pink-500'> Machine Learning</span> and 
              <span className='text-pink-500'> Artifical Intelligence</span> in the future.   
             </p>
          </div>
          <div>
            <h3 className='text-3xl py-1 text-black dark:text-white mt-20'>Portfolio</h3>
          </div> 
        </section>
          <section>
            
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className={darkMode ? ' bg-gradient-to-b from-pink-500 to-gray-900 text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1 ' : " bg-gradient-to-b from-teal-500 to-white text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1" }>
            
              <h3  className=' text-3xl text-black dark:text-white'><a href='https://github.com/Esa112233/Web_Scraper' target='_blanck'>Papa Web Scraper</a></h3> <p className=' text-white dark:text-black'>PyQt5 • Selenium • MySQL • Multithreading</p>
              <div class="list-disc dark:text-white text-black pt-4">
  <p>-Developed a web scraper application that extracts emails and links from all Google pages of a given URL through a graphical User Interface (GUI) using PyQt5 for the front-end </p>
  <br/>
  <p>-Implemented a seamless integration with a MYSQL database to efficiently store and validate results, effectively preventing any duplicate results</p>
  <br/>
  <p>-Developed a user registration and login system, implementing personalized data storage for each user’s results within the database</p>
  <br/>
  <p>-Implemented a feature that allows users to convert displayed email addresses and links in the GUI to an Excel file for further analysis</p>
</div>
        </div>


          <div className={darkMode ? ' bg-gradient-to-b from-pink-500 to-gray-900 text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1 ' : "bg-gradient-to-b from-teal-500 to-white text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1 " }>
          <h3  className=' text-3xl text-black dark:text-white'><a href='https://github.com/Esa112233/Django-Chat-App' target='_blanck' >QuickChat</a></h3> <p className=' text-white dark:text-black'>Django • Django Channels • WebSockets • HTML•  Bootstrap • JavaScript</p>
          <div class="list-disc text-dark dark:text-white pt-4">
            <p>-Created a real-time chat application powered by Django and WebSockets, allowing users to join dynamic chat rooms and connect with people online</p>
            <br/>
            <p>-Employed DOM manipulation techniques to seamlessly render incoming messages using JavaScript, HTML, and Bootstrap, creating a smooth and engaging user experience</p>
            <br/>
            <p>-Implemented an intuitive auto-scrolling feature using JavaScript, ensuring that new messages are automatically displayed at the bottom of the chat interface </p>
          </div>
          </div>


        </div>

        <div>
            <h3 className='text-3xl py-1 text-black dark:text-white mt-20'>Work Experience</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className={darkMode ? ' bg-gradient-to-b from-pink-500 to-gray-900 text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1 ' : " bg-gradient-to-b from-teal-500 to-white text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1" }>
            
              <h3  className=' text-3xl text-black dark:text-white '>Papa Sports</h3>
              <br/> <h2 className='text-2xl dark:text-black text-white'>Marketing Agent</h2>
              <div class="list-disc dark:text-white text-black pt-4">
  <p>-Contacted over 400 potential customers for boxing apparel and equipment, resulting in increased product inquiries </p>
  <br/>
  <p>-Trained a new employee on marketing procedures and YAMM software to send emails</p>
  <br/>
  <p>-Generated product catalogs by analyzing websites and available information on consumer interests</p>
</div>
        </div>


          <div className={darkMode ? ' bg-gradient-to-b from-pink-500 to-gray-900 text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1 ' : " bg-gradient-to-b  from-teal-500 to-white text-center p-10 rounded-lg divide-y-20 shrink basis-1/3 flex-1" }>
          <h3  className=' text-3xl dark:text-white text-black'>COBS Bread</h3>
          <br/> <h2 className='text-2xl  dark:text-black text-white'>Sales Associate</h2>
          <div class="list-disc dark:text-white text-black pt-4">
            <p>-Advised customers on product selection to meet dietary restrictions and needs</p>
            <br/>
            <p>-Collaborated with over 6 team members to serve customers during rush hours</p>
            <br/>
            <p>-Updated records for savory foods every four hours in accordance with Alberta Health Services guidelines and assessed product quality to guarantee consumer safety </p>
          </div>
          </div>


        </div>
          

          </section>


        </section>
        </main>
    </div>
   
  ) 
}
