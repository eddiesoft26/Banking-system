import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Edwin', lastName: 'Alaekpere', email: 'ala@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={30000.23}/>
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 200.0},{currentBalance: 400.10}]}
      />
    </section>
  )
}

export default Home