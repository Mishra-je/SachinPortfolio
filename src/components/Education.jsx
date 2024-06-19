import React from 'react';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-gradient-to-r from-black to-blue-900 ... text-gray-300 flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='max-w-[1000px] w-full px-4'>
        <div className='text-center pb-8'>
          <h2 className='text-4xl font-bold inline'>
            Education
          </h2>
        </div>
        <div className='space-y-8'>
        <div className='text-xl'>
            <h3 className='text-2xl font-semibold'>Bachelor of Computer Applications (BCA)</h3>
            <p className='text-lg mt-2'>
              <a
                href='https://www.impactcollege.co.in/' 
                className='text-blue-400 hover:underline'
                target='_blank' 
                rel='noopener noreferrer'
              >
                Impact College,Patna 
              </a>
            </p>
            <p className='text-lg italic'>2021 - 2024</p>
          </div>
          
          <div className='text-xl'>
            <h3 className='text-2xl font-semibold'>Master of Computer Applications (MCA)</h3>
            <p className='text-lg mt-2'>
              <a
                href='google.com' 
                className='text-blue-400 hover:underline'
                target='_blank' 
                rel='noopener noreferrer'
              >
               Currently Looking for
              </a>
            </p>
            <p className='text-lg italic'>2024 - 2026</p>
          </div>
          <div className='text-xl'>
            <h3 className='text-2xl font-semibold'>Matric Exam (10th Board)</h3>
            <p className='text-lg italic'>2018</p>
          </div>
          <div className='text-xl'>
            <h3 className='text-2xl font-semibold'>Intermediate (12th Board)</h3>
            <p className='text-lg italic'>2018 - 2020</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Education;
