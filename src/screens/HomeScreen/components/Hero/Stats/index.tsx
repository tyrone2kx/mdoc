import React from 'react'

interface IProps {
    statistics: string;
    description: string;
}

const Stats = ({ description, statistics }: IProps) => {
  return (
    <div className='md:mr-10 flex flex-col items-center flex-none'>
        <p className='text-white font-bold text-[28px]'> {statistics} </p>
        <p className='text-white text-[18px] font-thin'> {description} </p>
    </div>
  )
}

export default Stats