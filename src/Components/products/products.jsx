import { Pen, Trash2 } from "lucide-react";

export default function Products() {
    return (
        <>
            <div className='flex justify-end'><button className='bg-orange-500 px-2 text-white border py-3 rounded'>Add product</button></div>
            <div className="bg-white rounded-lg">
                <div >
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left ">
                                <th className="px-6 text-sm font-semibold text-gray-900">Name</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Price</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">stock</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">modify</th>
                                <th className="px-6 py-3 text-sm font-semibold text-gray-900">Delete</th>

                            </tr>
                        </thead>
                        <tbody className="border-b-1 divide-gray-200">
                            <tr key="1" className="border-b-1 border-gray-200">
                                <td className="px-6 py-4 text-sm text-gray-900">Rolex </td>
                                <td className="px-6 py-4 text-sm text-gray-500">1000</td>
                                <td className="px-6 py-4 text-sm text-gray-500"> <span className="bg-red-200 px-7 rounded-full text-red-700">10</span></td>
                                <td className="px-6 py-4 text-sm text-gray-500"><button><Pen/></button></td>
                                <td className="px-6 py-4 text-sm text-gray-500"><button><Trash2/></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}