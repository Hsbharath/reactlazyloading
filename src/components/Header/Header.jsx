import React from 'react';

const Header = (title) => {

  return (
    <>
      <div className="w-full bg-slate-900 p-2 flex items-center justify-start gap-4 origin-left transition duration-700">
        <h1 className="relative text-5xl font-bold z-10
        before:absolute
        before:top-0
        before:right-0
        before:w-[3px]
        before:h-full
        before:bg-pink-800
        beore:-z-10">
          <span className="bg-clip-text 
                    text-transparent 
                    bg-gradient-to-r 
                    from-pink-500 
                    to-violet-500 px-4">B</span>
        </h1>
        <p className="text-xl text-white font-medium">{title.title}</p>
      </div>
    </>
  )
}

export default Header;