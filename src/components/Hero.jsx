import CTAButton from "./CTAButton"

const Hero = () => {
  return (
    <div className="h-[100vh] my-[10rem] flex flex-col gap-5 items-center sm:items-start">
        <h1 className="font-bold text-3xl sm:text-6xl sm:text-left ">Navigate the Future of <br className="hidden md:block" /> Crypto with VariableAI</h1>
        <p className="text-[rgba(255,255,255,0.6)] sm:text-2xl sm:text-left">Your mate for perpetual trading making sure that you make <br className="hidden md:block" /> the most out of every trade</p>

        <CTAButton buttonBg="rgba(0,0,0.0)" borderColor="white" buttonText="white" iconBg="white" iconColor="black" />
    </div>
  )
}

export default Hero