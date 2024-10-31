import React from 'react'
import WelcomeModalTemp from '@/assets/Dashboard/WelcomeModalTemp.svg';

function WelcomeModal() {
  return (
    <div className="fixed flex items-center justify-center inset-0 bg-white border-transparent shadow-inner bg-opacity-80  backdrop-blur-sm ">
      <div className="flex flex-col justify-start gap-3 bg-white rounded-xl p-6 w-96 max-w-full">
         <span className="font-semibold text-sm text-start">Welcome to engage mix</span>
          <img src={WelcomeModalTemp} className="w-[48.5rem] rounded-[0.5rem] "/>
          <p className="text-xs font-medium text-start text-gray-600">
            We help you grow sales by mentioning your business when your keywords are mentioned.
             We help you grow sales by mentioning your business when your keywords are mentioned. 
          </p>
          <div className="flex justify-end gap-4 mt-8 mb-3 ">
             <button className="bg-gray-300 rounded-lg text-xs pl-3 pr-3 pt-2 pb-2">Learn More</button>
             <button className="bg-blue-500 rounded-lg text-xs text-white pl-3 pr-3 pt-2 pb-2">Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default WelcomeModal