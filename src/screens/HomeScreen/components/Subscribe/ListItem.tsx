import { BulletIcon, CheckmarkIcon } from 'assets/icons'
import React from 'react'

interface IProps {
    description: string;
    isCheckmark?: boolean
}

const ListItem = ({ description, isCheckmark }: IProps) => {
  return (
    <div className='flex mb-4'>
        {!isCheckmark ? <BulletIcon /> : <CheckmarkIcon />}
        <p className='ml-4'>
            {description}
        </p>
    </div>
  )
}

export default ListItem