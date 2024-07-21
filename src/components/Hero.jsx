import CTAButton from "./CTAButton"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <div className="rounded-[2rem] h-[110vh] lg:h-[120vh] m-2 p-1 md:relative px-3 pt-6 md:px-24 md:pt-12 bg-cover bg-center bg-no-repeat bg-[url('/HeroGraphic-mobile.svg')] lg:bg-[url('/HeroGraphic.svg')]">
      <Navbar />
      <div className="mt-[10rem] mb-[5rem] sm:mb-[2rem] flex flex-col gap-5 items-center text-center lg:text-left lg:items-start">
        <h1 className="font-bold text-3xl lg:text-6xl">
          Navigate the Future of <br className="hidden md:block" /> Crypto with VariableAI
        </h1>
        <p className="text-[rgba(255,255,255,0.6)] lg:text-2xl">
          Your mate for perpetual trading making sure that you make <br className="hidden md:block" /> the most out of every trade
        </p>
        <CTAButton 
          variant="secondary"
        />
      </div>
    </div>
  )
}

export default Hero