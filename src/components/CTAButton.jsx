import { ArrowRightLeft } from 'lucide-react';

const CTAButton = () => {
    return (
        <button className='flex px-1 gap-2 items-center w-[150px] h-[50px] rounded-full bg-white'>
            <div className='bg-black rounded-full p-2'>
                <ArrowRightLeft color="#ffffff" />
            </div>
            <h2 className='font-bold text-black' >Trade Now</h2>
        </button>
    )
}

export default CTAButton