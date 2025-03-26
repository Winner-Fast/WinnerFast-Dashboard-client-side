import { Pen, Trash2 } from "lucide-react";

export default function ExpensesTable() {
    return (
        <>
            <div className='flex justify-end'><button className='bg-orange-500 px-2 text-white border py-3 rounded'>New expense</button></div>
            <div className="bg-white rounded-lg">
                <div >
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left ">
                                <th className="px-6 text-sm font-semibold text-gray-900">Operation Name</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">type</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Amount</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">date</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Details</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">modify</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Delete</th>

                            </tr>
                        </thead>
                        <tbody className="border-b-1 divide-gray-200">
                            <tr key="1" className="border-b-1 border-gray-200">
                                <td className="px-6 py-4 text-sm text-gray-900">sell New item</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Variable</td>
                                <td className="px-6 py-4 text-sm text-gray-500">200</td>
                                <td className="px-6 py-4 text-sm text-gray-500">2023-20-20</td>
                                <td className="px-6 py-4 text-sm text-gray-500"><button className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300">See more</button></td>

                                <td className="px-6 py-4 text-sm text-gray-500"><button><Pen /></button></td>
                                <td className="px-6 py-4 text-sm text-gray-500"><button><Trash2 /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}