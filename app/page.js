"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {motion} from 'framer-motion';

export default function Home() {
  const news = [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
      title: "The Downsides of AI Artistry",
      content: "What are the possible adverse effects of on-demand AI-image generation?"
    },
    {
      title: "Is VC Funding Drying Up?",
      content: "Private funding by VC firms is down by 50% YOY. We take a look at what it means."
    },
  ]

  const arcticles = [
    {
      image: '/images/image-retro-pcs.jpg',
      title: 'Reviving Retro PCs',
      content: 'What happens when old PCs are given modern upgrades?',
      number: '01'
    },
    {
      image: '/images/image-top-laptops.jpg',
      title: 'Top 10 Laptops of 2022',
      content: 'Our best picks for various needs and budgets.',
      number: '02'
    },
    {
      image: '/images/image-gaming-growth.jpg',
      title: 'The Growth of Gaming',
      content: 'How the pandemic has sparked fresh opportunities.',
      number: '03'
    },

  ]

  return (
    <div className="w-full h-full flex flex-col px-16">
      <Navbar/>
      <div className="">
        <motion.section initial={{opacity:0, y:1000}} animate={{opacity:1, y:0}} transition={{duration:1}} className="h-[70%] mb-16 flex justify-between">
          <div className="w-[70%] h-full flex flex-col gap-5">
            <motion.img src="/images/image-web-3-desktop.jpg"/>
            <div className="flex justify-between w-full">
              <p className="text-[50px] w-[30%] font-extrabold text-verydarkblue leading-none line-clamp-3">The Bright Future of Web 3.0?</p>
              <div className="flex gap-5 w-[50%] flex-col justify-between">
                <p className="text-text ">We dive into the next evolution of the web that claims put the power of the platforms back into the hands of people. But is it really fulfilling its promise?</p>
                <motion.button whileHover={{backgroundColor:'hsl(240, 100%, 5%)'}} className="bg-red-400 w-[200px] text-white py-3 uppercase tracking-widest">Read More</motion.button>
              </div>
            </div>
          </div>
          <div className="bg-verydarkblue p-4 w-[26%] gap-5 flex flex-col">
            <h1 className="text-softorange text-[40px]">News</h1>
            <ul>  
              {news.map((newsitem, index) => 
                <li key={newsitem.title}>
                  <motion.h2 whileHover={{color:'hsl(35, 77%, 62%)'}} className="text-white font-bold text-[25px] cursor-pointer">{newsitem.title}</motion.h2>
                  <p className="text-darkgrayishblue">{newsitem.content}</p>
                  <hr className={`${index === news.length - 1 ? 'hidden' : 'my-5'} border-white/50`}/>
                </li>
              )}
            </ul>
          </div>
        </motion.section>
        <motion.section className="py-2 grid grid-cols-3 gap-5">
          {
            arcticles.map((arcticle) => 
              <motion.div initial={{opacity:0, x:-1000}} animate={{opacity:1, x:0}} transition={{duration:1, delay:1}} key={arcticle.number} className="flex gap-5 h-[80%] justify-between">
                <motion.img src={arcticle.image}/>
                <div className="flex flex-col gap-2 h-[100%]">
                  <h1 className="text-text font-extrabold text-[50px]">{arcticle.number}</h1>
                  <motion.h2 whileHover={{color:'hsl(5, 85%, 63%)'}} className="cursor-pointer font-bold text-[20px]">{arcticle.title}</motion.h2>
                  <p className="text-text text-[15px]">{arcticle.content}</p>
                </div>
              </motion.div>
            )
          }        
        </motion.section>
      </div>
      <Footer/>
    </div>
  );
}
