import { Pen, Trash2 } from "lucide-react";

export default function SellsTable() {
    return (
        <>
            <div className='flex justify-end'><button className='bg-orange-500 px-2 text-white border py-3 rounded'>New sell</button></div>
            <div className="bg-white rounded-lg">
                <div >
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left ">
                                <th className="px-6 text-sm font-semibold text-gray-900">operationName</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Total Amount</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Quantity</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Product</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">modify</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Delete</th>

                            </tr>
                        </thead>
                        <tbody className="border-b-1 divide-gray-200">
                            <tr key="1" className="border-b-1 border-gray-200">
                                <td className="px-6 py-4 text-sm text-gray-900">sell New item</td>
                                <td className="px-6 py-4 text-sm text-gray-500">8000</td>
                                <td className="px-6 py-4 text-sm text-gray-500">2</td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5">
                                        <option selected>Choose Products</option>
                                        <option value="US">Product1</option>
                                        <option value="CA">Product2</option>
                                    </select></td>
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