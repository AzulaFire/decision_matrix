'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import northImage from '@/public/images/jobs.png'; // Import your images here
import southImage from '@/public/images/moving.png';
import eastImage from '@/public/images/car.png';
import westImage from '@/public/images/computer.png';
import Image from 'next/image';

const RotatingCircle = () => {
  const [rotation, setRotation] = useState(0);
  const [isActive, setIsActive] = useState('');

  const handleClick = (event) => {
    const parent = event.target.parentElement.id;
    setRotation(rotation + 90); // Rotate by 90 degrees clockwise
    setIsActive(parent);
  };

  return (
    <div className='circle' style={{ transform: `rotate(${rotation}deg)` }}>
      <motion.div
        id='North'
        className={`circle-image north ${
          isActive === 'North' ? 'grayscale-0' : 'grayscale'
        }`}
        animate={{ rotate: -rotation }}
        transition={{ duration: 1 }}
      >
        <Image
          src={northImage}
          className='circle-image cursor-pointer'
          alt='North'
          onClick={handleClick}
          priority
        />
      </motion.div>
      <motion.div
        id='East'
        className={`circle-image east ${
          isActive === 'East' ? 'grayscale-0' : 'grayscale'
        }`}
        animate={{ rotate: -rotation }}
        transition={{ duration: 1 }}
      >
        <Image
          src={eastImage}
          className='circle-image cursor-pointer'
          alt='East'
          onClick={handleClick}
          priority
        />
      </motion.div>
      <motion.div
        id='South'
        className={`circle-image south ${
          isActive === 'South' ? 'grayscale-0' : 'grayscale'
        }`}
        animate={{ rotate: -rotation }}
        transition={{ duration: 1 }}
      >
        <Image
          src={southImage}
          className='circle-image cursor-pointer'
          alt='South'
          onClick={handleClick}
          priority
        />
      </motion.div>
      <motion.div
        id='West'
        className={`circle-image west ${
          isActive === 'West' ? 'grayscale-0' : 'grayscale'
        }`}
        animate={{ rotate: -rotation }}
        transition={{ duration: 1 }}
      >
        <Image
          src={westImage}
          className='circle-image cursor-pointer'
          alt='West'
          onClick={handleClick}
          priority
        />
      </motion.div>
    </div>
  );
};

export default RotatingCircle;
