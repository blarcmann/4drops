import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme('dark');


  useEffect(() => {
    setIsMounted(true);
  }, []);


  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };


  return (
    <div className="container-fluid min-h-screen">
      <Head>
        <title>
          4drops
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white dark:bg-black">
          <div className="mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-1 pt-4 md:justify-start md:space-x-10 mb-24">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="whitespace-nowrap text-sm font-small text-gray-500 dark:text-white hover:text-gray-500 mr-5">
                  Work
                </a>
                <a href="#" className="whitespace-nowrap text-sm font-small text-gray-500 dark:text-white hover:text-gray-500 mr-5">
                  About
                </a>
                <a href="#" className="whitespace-nowrap text-sm font-small text-gray-500 dark:text-white hover:text-gray-500 mr-5">
                  $10K
                </a>
                <a href="#" className="whitespace-nowrap text-sm font-small text-gray-500 dark:text-white hover:text-gray-500 mr-5">
                  Blog
                </a>
                <a href="#" className="whitespace-nowrap border border-gray-400 p-1 px-2 rounded-md text- font-small text-gray-500 dark:text-white hover:text-gray-500 mr-5">
                  Contact
                </a>
                {/* <button className="btn-dark" onClick={switchTheme}>Theme</button> */}
              </div>
            </div>
            <div className="flex justify-center flex-col items-center mb-20">
              <img className="h-auto w-20 mb-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              <h1 className="text-4xl font-bold mb-4">We design software.</h1>
              <h2 className="text-4xl font-bold text-gray-400">Next-gen SaaS startups start here.</h2>
            </div>

            <div className="flex justify-center flex-col items-center mb-20">
              <h1 className="text-base font-normal mb-4 text-gray-400">These teams can confirm it</h1>
              <div className="container flex mx-auto justify-center">
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <img className="w-16 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              </div>
            </div>

            <div className="w-10/12 mx-auto flex flex-col border-2 border-gray-400 rounded-xl p-6 pb-10 mb-24">
              <div className="flex justify-center mb-8">
                <div className="bg-gray-400 text-black px-2 py-1 rounded-md text-center mr-4">Impower</div>
                <div className="text-gray-400 py-1 rounded-lg">2020</div>
              </div>
              <h1 className="w-8/12 mx-auto text-4xl font-bold mb-16">We designed a progressive all-in-one SaaS solution for enterprises/property managers.</h1>
              <img className="w-11/12 mx-auto rounded-lg block mb-12" src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?cs=srgb&dl=pexels-pixabay-53621.jpg&fm=jpg" alt="" />
              <div className="flex justify-center mb-4 items-center">
                <div className="flex center w-2 h-2 rounded-lg bg-gray-700 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-gray-700 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-gray-700 mr-8"></div>
                <p className="text-gray-400 text-sm text-center">Coming soon</p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center mb-20 w-6/12 mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">“Farzad and his team consistently do work that is beautiful and well thought out. We're big fans.”</h3>
              <img className="w-12 mb-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              <p className="text-center text-lg">Andrew Wilkinson</p>
              <p className="text-center text-sm text-gray-400">Founder of MetaLab,</p>
              <p className="text-center text-sm text-gray-400">Owner of Dribbble.</p>
            </div>


            <div className="w-10/12 mx-auto flex flex-col border-2 border-gray-400 rounded-xl p-6 pb-10 mb-24">
              <div className="flex justify-center mb-8">
                <div className="bg-gray-400 text-black px-2 py-1 rounded-md text-center mr-4">Sonantic</div>
                <div className="text-gray-400 py-1 rounded-lg">2020</div>
              </div>
              <h1 className="w-8/12 mx-auto text-4xl font-bold mb-16">We designed an intuitive software that turns script to hyper-realistic artificial voices for the video game industry.</h1>
              <img className="w-11/12 mx-auto rounded-lg block mb-12" src="https://images.pexels.com/photos/4836384/pexels-photo-4836384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              <div className="flex justify-center mb-4 items-center">
                <div className="flex center w-2 h-2 rounded-lg bg-gray-700 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-gray-700 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-gray-700 mr-8"></div>
                <p className="text-gray-400 text-sm text-center cursor-pointer">View Sonantic → </p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center mb-20 w-6/12 mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">“3drops is one of the very few agencies I've worked with that thinks and works like a startup.”</h3>
              <img className="w-12 mb-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              <p className="text-center text-lg">Ted Persson</p>
              <p className="text-center text-sm text-gray-400">VC at EQT Ventures</p>
            </div>


            <div className="w-10/12 mx-auto flex flex-col border-2 border-yellow-400 rounded-xl p-6 pb-10 mb-24">
              <div className="flex justify-center mb-8">
                <div className="bg-yellow-400 text-black px-2 py-1 rounded-md text-center mr-4">Roadmap</div>
                <div className="text-yellow-400 py-1 rounded-lg">2016 → Present</div>
              </div>
              <h1 className="w-8/12 mx-auto text-4xl font-bold mb-16">We created world's first project visualisation software for remote teams.</h1>
              <img className="w-11/12 mx-auto rounded-lg block mb-12" src="https://images.pexels.com/photos/4836384/pexels-photo-4836384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              <div className="flex justify-center mb-4 items-center">
                <div className="flex center w-2 h-2 rounded-lg bg-yellow-500 opacity-60 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-yellow-500 opacity-60 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-yellow-500 opacity-60 mr-8"></div>
                <p className="text-gray-400 text-sm text-center">Visit Roadmap → </p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center mb-20 w-6/12 mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">“In a city full of good designers (Stockholm), the 3drops office is home to some truly remarkable talent. It also happens to be home to some really nice people who also make the process itself simple.”</h3>
              <img className="w-12 mb-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              <p className="text-center text-lg">Tyler Crowley</p>
              <p className="text-center text-sm text-gray-400">Founder of STHLM Tech</p>
            </div>


            <div className="w-10/12 mx-auto flex flex-col border-2 border-green-500 rounded-xl p-6 pb-10 mb-24">
              <div className="flex justify-center mb-8">
                <div className="bg-green-400 text-black px-2 py-1 rounded-md text-center mr-4">Unomaly</div>
                <div className="text-green-400 py-1 rounded-lg">2017</div>
              </div>
              <h1 className="w-8/12 mx-auto text-4xl font-bold mb-16">We designed a modern algorithmic monitoring system for enterprises.</h1>
              <img className="w-11/12 mx-auto rounded-lg block mb-12" src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              <div className="flex justify-center mb-4 items-center">
                <div className="flex center w-2 h-2 rounded-lg bg-yellow-500 opacity-60 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-yellow-500 opacity-60 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-yellow-500 opacity-60 mr-8"></div>
                <p className="text-gray-400 text-sm text-center">Visit Roadmap → </p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center mb-20 w-6/12 mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">“In a city full of good designers (Stockholm), the 3drops office is home to some truly remarkable talent. It also happens to be home to some really nice people who also make the process itself simple.”</h3>
              <img className="w-12 mb-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              <p className="text-center text-lg">Tyler Crowley</p>
              <p className="text-center text-sm text-gray-400">Founder of STHLM Tech</p>
            </div>



            <div className="w-10/12 mx-auto flex flex-col border-2 border-red-500 rounded-xl p-6 pb-10 mb-24">
              <div className="flex justify-center mb-8">
                <div className="bg-red-500 text-black px-2 py-1 rounded-md text-center mr-4">Toggl</div>
                <div className="text-red-400 py-1 rounded-lg">2016 → 2017</div>
              </div>
              <h1 className="w-8/12 mx-auto text-4xl font-bold mb-16">We redesigned world's most popular time tracking tool for freelancers & teams.</h1>
              <img className="w-11/12 mx-auto rounded-lg block mb-12" src="https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              <div className="flex justify-center mb-4 items-center">
                <div className="flex center w-2 h-2 rounded-lg bg-red-500 opacity-80 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-red-500 opacity-80 mr-2"></div>
                <div className="flex center w-2 h-2 rounded-lg bg-red-500 opacity-80 mr-8"></div>
                <p className="text-gray-400 text-sm text-center">Visit Toggl →
</p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center mb-32 w-6/12 mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">“3drops is one of the most talented design teams in the business. There is something powerful yet simple about Scandinavian design which 3drops take to an elevated level.”</h3>
              <img className="w-12 mb-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              <p className="text-center text-lg">Wilson Fong</p>
              <p className="text-center text-sm text-gray-400">Prev. VP Partnership at Threadless,</p>
              <p className="text-center text-sm text-gray-400">Partner at Venture</p>
            </div>


            <div className="flex justify-center flex-col items-center mb-20">
              <h1 className="text-4xl font-bold mb-4">Got a challenge for us?</h1>
              <h2 className="text-4xl font-bold text-gray-400">Drop us an email.</h2>
              <div className="flex justify-center my-10">
                <button className="bg-white text-black px-6 py-3 rounded-md text-center mr-12">Get in touch</button>
                <button className="text-white py-1 rounded-lg">About us →</button>
              </div>
              <div className="flex justify-center my-16">
                <button className="text-white py-1 rounded-lg mr-6">About</button>
                <button className="text-white py-1 rounded-lg mr-6">Dribble</button>
                <button className="text-white py-1 rounded-lg mr-6">Twitter</button>
                <button className="text-white py-1 rounded-lg mr-6">Contact</button>
              </div>
              <div className="flex justify-center flex-col items-center mb-20 w-6/12 mx-auto">
                <img className="w-12 mb-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <p className="text-center text-lg">Farzad Ban</p>
                <p className="text-center text-sm text-gray-400">Founder & CEO</p>
                <h3 className="text-2xl font-bold text-center mt-8 text-white">One story per week. One lesson at a time. Join over 20,000 entrepreneurs to receive my weekly posts:</h3>
                <div className="flex justify-center items-center mt-20">
                  <input type="text" placeholder="Your email" className="bg-gray-600 px-4 py-2 rounded-lg mr-8 focus:outline-none focus:border-2 focus:border-white" />
                  <button className="bg-white text-black px-6 py-3 rounded-md text-center mr-12">Subscribe</button>
                </div>
                <button className="text-white text-sm hover: rounded-lg mt-8 text-gray-400">Previous updates ↗︎</button>
              </div>
            </div>

            <div className="flex justify-center flex-col mb-8 w-6/12 mx-auto pt-10 pb-16 border-gray-700 border-b-2 border-t-2">
              <p className="text-sm text-gray-400 mb-16">Latest from our blog</p>

              <a href="#" className="whitespace-nowrap text-xl font-semibold text-white dark:text-white p-4 rounded-lg hover:bg-gray-700 hover:py-4 hover:px-8 hover:pl-2">
                PART 1 - Brand pricing vs Experience pricing
              </a>
              <a href="#" className="whitespace-nowrap text-xl font-semibold text-white dark:text-white p-4 rounded-lg hover:bg-gray-700 hover:py-4 hover:px-8 hover:pl-2">
                Roadmap vs. Kanban Boards/To Do lists
              </a>
              <a href="#" className="whitespace-nowrap text-xl font-semibold text-white dark:text-white p-4 rounded-lg hover:bg-gray-700 hover:py-4 hover:px-8 hover:pl-2">
                Tools we use to run our remote team
              </a>
            </div>

            <div className="flex justify-center flex-col mb-20 w-6/12 mx-auto pb-16 border-gray-700 border-b-2">
              <p className="text-sm text-gray-400 mb-16">Startups & Experiments</p>

              <div className="flex justify-start item-center mb-8 cursor-pointer">
                <img className="w-16 mb-4 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <div>
                  <h3 className="text-lg font-semi-bold text-left text-white">Roadmap</h3>
                  <p className="text-center text-gray-500 text-lg">Visual prioritisation software for remote teams.</p>
                </div>
              </div>
              <div className="flex justify-start item-center mb-8 cursor-pointer">
                <img className="w-16 mb-4 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <div>
                  <h3 className="text-lg font-semi-bold text-left text-white">Roadmap</h3>
                  <p className="text-center text-gray-500 text-lg">Visual prioritisation software for remote teams.</p>
                </div>
              </div>
              <div className="flex justify-start item-center mb-8 cursor-pointer">
                <img className="w-16 mb-4 mr-4 block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                <div>
                  <h3 className="text-lg font-semi-bold text-left text-white">Roadmap</h3>
                  <p className="text-center text-gray-500 text-lg">Visual prioritisation software for remote teams.</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </main>
      {/* <button className="btn-dark" onClick={switchTheme}>Change theme</button> */}
    </div>
  );
}