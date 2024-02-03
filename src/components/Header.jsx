import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center
        px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://www.rgpapp.com/images/logo.png' 
                alt='logo' className='h-5 cursor-pointer' />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
