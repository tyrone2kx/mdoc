import React from 'react'
import Card from './Card'
import user1 from 'assets/images/user1.png'
import user2 from 'assets/images/user1.png'
import user3 from 'assets/images/user1.png'
import user4 from 'assets/images/user1.png'

const Members = () => {
  return (
    <section className='bg-darkBlue  py-[100px]'>
    <div className="flex justify-center px-12">
      <h3 className="text-white text-[32px] text-center ">
      Don’t take our word for it. Hear what our members are saying:
      </h3>
    </div>

    <div className='flex flex-nowrap px-12 mt-12 overflow-x-auto space-x-12 snap-x snap-mandatory '>
        <Card image={user1} occupation='MD, All Africa' name={'Adeshina Olawale'} />
        <Card image={user2} occupation='MD, All Africa' name={'Adeshina Olawale'} />
        <Card image={user3} occupation='MD, All Africa' name={'Adeshina Olawale'} />
        <Card image={user4} occupation='MD, All Africa' name={'Adeshina Olawale'} />
        <Card image={user4} occupation='MD, All Africa' name={'Adeshina Olawale'} />
    </div>

    </section>
  )
}

export default Members