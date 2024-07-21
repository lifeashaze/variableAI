import { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowRightLeft } from 'lucide-react';

const CTAButton = ({ 
  variant = 'primary',
  text = 'Trade Now',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      buttonBg: 'white',
      buttonText: 'black',
      iconBg: 'black',
      iconColor: 'white',
      borderColor: 'transparent',
      borderWidth: '2px'
    },
    secondary: {
      buttonBg: 'rgba(0,0,0,0)',
      buttonText: 'white',
      iconBg: 'white',
      iconColor: 'black',
      borderColor: 'white',
      borderWidth: '2px'
    }
  };

  const activeVariant = isHovered
    ? (variant === 'primary' ? 'secondary' : 'primary')
    : variant;

  const {
    buttonBg,
    buttonText,
    iconBg,
    iconColor,
    borderColor,
    borderWidth
  } = variants[activeVariant];

  return (
    <button 
      className='flex px-1 gap-2 items-center w-[150px] h-[50px] rounded-full transition-all duration-300 ease-in-out'
      style={{ 
        backgroundColor: buttonBg,
        border: `${borderWidth} solid ${borderColor}`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className='rounded-full p-2 transition-all duration-300 ease-in-out' 
        style={{ backgroundColor: iconBg }}
      >
        <ArrowRightLeft color={iconColor} />
      </div>
      <h2 
        className='font-bold transition-all duration-300 ease-in-out' 
        style={{ color: buttonText }}
      >
        {text}
      </h2>
    </button>
  )
}

CTAButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string
};

export default CTAButton