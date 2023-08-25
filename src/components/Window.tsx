import { useRef } from 'react';

export default function Window() {

  return (
    <div className="absolute w-[200px] h-[200px] flex flex-col" id="window">
      <header className=" bg-blue-600" id="windowHeader">
        HEADER
      </header>
      <main className=" bg-red-200 flex-grow">
        CONTENT
      </main>
    </div>
  ) 
}