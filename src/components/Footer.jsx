
const Footer = () => {
  const linkStyle = "text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200"

  return (
    <footer className="px-6 pt-6 md:px-24 md:pt-12">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Company Info */}
        <div className="flex flex-col items-start gap-2 md:gap-5">
          <div className="flex gap-3 items-center">
            <img src="logo.svg" alt="VariableAI Logo" className="h-10 w-10" />
            <h1 className="text-white text-2xl font-bold">VariableAI</h1>
          </div>
          <p className={`text-left ${linkStyle}`}>
            VariableBot is a state-of-the-art perpetual trading platform utilizing <br className="hidden sm:block" />
            advanced algorithms to optimize your cryptocurrency trading
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="text-left flex gap-10 mt-5 md:mt-0">
          {/* Community Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Community</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className={linkStyle}>Twitter</a>
              <a href="#" className={linkStyle}>Telegram</a>
            </div>
          </div>
          {/* Information Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Information</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className={linkStyle}>About Us</a>
              <a href="#" className={linkStyle}>FAQ</a>
              <a href="#" className={linkStyle}>Whitepaper</a>
            </div>
          </div>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className={`flex flex-col justify-center font-extralight text-center mt-10 mb-10 md:text-left md:flex-row md:justify-between`}>
        <p className="text-[rgba(255,255,255,0.6)]">© VariableAI 2024. All rights reserved</p>
        <a href="#" className={`${linkStyle} underline`}>Terms and Conditions</a>
      </div>
    </footer>
  )
}

export default Footer