import PropTypes from 'prop-types';
import { ArrowRightLeft } from 'lucide-react';

const CTAButton = ({ 
  buttonBg = 'white', 
  buttonText = 'black', 
  iconBg = 'black', 
  iconColor = 'white', 
  text = 'Trade Now',
  borderColor = 'transparent',
  borderWidth = '2px'
}) => {
  return (
    <button 
      className='flex px-1 gap-2 items-center w-[150px] h-[50px] rounded-full' 
      style={{ 
        backgroundColor: buttonBg,
        border: `${borderWidth} solid ${borderColor}`
      }}
    >
      <div 
        className='rounded-full p-2' 
        style={{ backgroundColor: iconBg }}
      >
        <ArrowRightLeft color={iconColor} />
      </div>
      <h2 
        className='font-bold' 
        style={{ color: buttonText }}
      >
        {text}
      </h2>
    </button>
  )
}

CTAButton.propTypes = {
  buttonBg: PropTypes.string,
  buttonText: PropTypes.string,
  iconBg: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string
};

export default CTAButton