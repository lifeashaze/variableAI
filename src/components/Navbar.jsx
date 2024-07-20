import CTAButton from "./CTAButton"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <a href="#" className="flex gap-3 items-center">
        <img src="logo.svg" alt="VariableAI Logo" className="h-10 w-10" />
        <h1 className="text-white text-2xl font-bold hidden sm:block">
          VariableAI
        </h1>
      </a>

      <CTAButton />
    </nav>
  )
}

export default Navbar