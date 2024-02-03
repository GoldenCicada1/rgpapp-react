import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center
        px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://github.com/GoldenCicada1/rgpapp-react/blob/main/public/logo-blue.png?raw=true' 
                alt='logo' className='h-4 cursor-pointer' />
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
