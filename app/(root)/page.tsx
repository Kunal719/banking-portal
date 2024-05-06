import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Kunal', lastName: 'Srivastav', email: 'kunal@gmail.com' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome,'
                        subtext='Access and manage your account and transactions efficiently'
                        user={loggedIn?.firstName || 'Guest'}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar
                user={loggedIn}
                transcations={[]}
                banks={[{ currentBalance: 1250.35 }, { currentBalance: 1300.41 }]}
            />
        </section>
    )
}

export default Home