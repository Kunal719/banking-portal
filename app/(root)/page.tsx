import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id });

    if (!accounts) return;

    const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId;

    const account = await getAccount({ appwriteItemId });

    // console.log(accounts?.data, account)

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
                        accounts={accounts?.data}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </header>

                {/* <p>Hello World</p> */}
                <RecentTransactions
                    accounts={accounts?.data}
                    transactions={account?.transactions}
                    appwriteItemId={appwriteItemId}
                    page={currentPage}
                />
            </div>

            <RightSideBar
                user={loggedIn}
                transactions={account?.transactions}
                banks={accounts?.data?.slice(0, 2)}
            />
        </section>
    )
}

export default Home