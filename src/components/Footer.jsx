
const Footer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex flex-col items-start gap-5" >
                    <div className="flex gap-3 items-center">
                        <img src="logo.svg" alt="" className="h-10 w-10" />
                        <h1 className="text-white text-2xl font-bold">VariableAI</h1>
                    </div>
                    <div>
                        <p className="text-left  text-[rgba(255,255,255,0.6)]">VariableBot is a state-of-the-art perpetual trading platform utilizing <br className="hidden sm:block" />advanced algorithms to optimize your cryptocurrency trading </p>
                    </div>
                </div>


                <div className="text-left flex gap-10 mt-5 md:mt-0 ">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Community</h3>
                        <div className="flex flex-col gap-2 text-[rgba(255,255,255,0.6)]">
                            <a href="#">Twitter</a>
                            <a href="#">Telegram</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Information</h3>
                        <div className="flex flex-col gap-2 text-[rgba(255,255,255,0.6)]">
                            <a href="#">About Us</a>
                            <a href="#">FAQ</a>
                            <a href="#">Whitepaper</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center font-extralight text-[rgba(255,255,255,0.6)] mt-10 md:text-left md:flex-row md:justify-between">
                <p>© VariableAI 2024. All rights reserved</p>
                <a href="#" className="underline">Terms and Conditions</a>
            </div>
        </div>


    )
}

export default Footer