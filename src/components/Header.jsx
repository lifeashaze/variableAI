import { ArrowRightLeft } from 'lucide-react';

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex gap-3 items-center">
                <img src="logo.svg" alt="" className="h-10 w-10" />
                <h1 className="text-white text-2xl font-bold hidden sm:block">VariableAI</h1>
            </div>
            <button className='flex px-1 gap-2 items-center w-[150px] h-[50px] rounded-full bg-white'>
                <div className='bg-black rounded-full p-2'>
                <ArrowRightLeft color="#ffffff" />
                </div>
                <h2 className='font-bold' >Trade Now</h2>
            </button>
        </div>
    )
}

export default Header