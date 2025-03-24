import React from "react";
import { CircleDollarSign, Wallet, ClipboardList } from "lucide-react";
export default function Statistics(){
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div key="1" className="w-full">
            <div className="p-6 rounded-lg bg-gradient-to-b from-[#bb67ff] to-[#c484f3] text-black">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Sells</h2>
                <CircleDollarSign className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold mb-2">2000</p>
              <p className="text-sm opacity-80">Total</p>
            </div>
            
          </div>
          <div key="1" className="w-full">
            <div className="p-6 rounded-lg bg-gradient-to-b from-[#F8D49A] to-[#FFCA71] text-black">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Expense</h2>
                <ClipboardList className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold mb-2">2000</p>
              <p className="text-sm opacity-80">Total</p>
            </div>
            
          </div>
          <div key="1" className="w-full">
            <div className="p-6 rounded-lg bg-gradient-to-b from-[#FF919D] to-[#FC929D] text-black">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Revenue</h2>
                <Wallet className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold mb-2">2000</p>
              <p className="text-sm opacity-80">Total</p>
            </div>
            
          </div>
      </div>
    </div>
  )
}


