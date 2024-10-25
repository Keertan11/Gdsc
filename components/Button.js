import React from 'react'
import { Fugaz_One } from 'next/font/google';

const Fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const Button = (props) => {
  const { text, dark, clickHandler } = props;
  return (
    <button onClick={clickHandler} className={`rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 ${dark ? ' text-white bg-indigo-600 ' : 'text-indigo-600 '}`}>
      <p className={'px-6 sm:px-10 whitespace-nowrap py-2 ' + Fugaz.className}>{text}</p>
    </button>
  )
}

export default Button
