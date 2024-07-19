import CTAButton from "./CTAButton"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            
            <div className="flex gap-3 items-center">
                <img src="logo.svg" alt="" className="h-10 w-10" />
                <h1 className="text-white text-2xl font-bold hidden sm:block">VariableAI</h1>
            </div>

            <CTAButton />
        </div>
    )
}

export default Navbar