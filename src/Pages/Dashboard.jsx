import { useState, useEffect } from 'react';
import { LayoutDashboard, Users,  Package, BarChart3, CircleDollarSign,HandCoins,Wallet,LogOut } from 'lucide-react';
import SideBar from "../Components/sideBar"


const tabs = [
  { id: "dashboard", title: "Dashboard", icon: LayoutDashboard },
  { id: "Suppliers", title: "My suppliers", icon: Users },
  { id: "Products", title: "Product", icon: Package },
  { id: "Sells", title: "Sell", icon: CircleDollarSign },
  { id: "Expenses", title: "Expense", icon: HandCoins },
  { id: "Wallet", title: "Wallet", icon: Wallet },
  { id: "Statistics", title: "analytics", icon: BarChart3 },
];

export default function Dashboard() {
    
    const [activeTab, setActiveTab] = useState("dashboard");
    return (
        <div className="h-full flex flex-col">
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#ffe1bc] via-[#ffcfd1] to-[#f3c6f1] text-black font-inter">
                <div className="grid h-[97%] w-[97%] bg-[rgba(255,255,255,0.54)] rounded-2xl gap-4 overflow-hidden grid-cols-[11rem_auto_20rem] lg:grid-cols-[auto_20rem]  md:grid-cols-[50%_auto]  sm:grid-cols-1">
                <SideBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="p-4">
                    {activeTab === "dashboard" && (
                    <h1 className="text-2xl font-bold">
                        Welcome to your {activeTab}:
                    </h1>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}
