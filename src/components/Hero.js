import HeroImg from '../assets/p1.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";


export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
           
           
            facebook: 'https://www.facebook.com/chiyaan.vijay.161/',
            linkedin: 'https://www.linkedin.com/in/sivashangar'
        }
    }


    return <section className='flex  flex-col md:flex-row  px-5 py-32 bg-primary justify-center'id="home">
       <div className='md:w-full flex flex-col z-10'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im Sivashangar  <span className='text-black'>(Chiyaan)</span><br/>
               <br/> <p className='text-2xl'> Undergraduate Bachelor’s in Information Technology-SLIIT </p>
            </h1>
            <div className='flex py-10'>
               
                <a href={config.social.facebook} className='pr-5 hover:text-white '><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className="absolute right-0 md:bottom-28 bottom-1 md:w-1/2 h-72 md:h-auto brightness-50 md:brightness-100 z-0  " src={HeroImg} />

    </section>
}