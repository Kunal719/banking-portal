"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user])

    const router = useRouter();

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
            publicToken: public_token,
            user
        })

        router.push('/')
    }, [user]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config);

    return (
        <>
            {variant === 'primary' ? (
                <Button onClick={() => open} disabled={!ready} className='plaidlink-primary'>
                    Connect Bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button>
                    Connect Bank
                </Button>
            ) : (
                <Button>
                    Connect Bank
                </Button>
            )}
        </>
    )
}

export default PlaidLink