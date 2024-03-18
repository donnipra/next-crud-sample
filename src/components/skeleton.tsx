export const TableSkeleton = () => {
    return (
        <table className='w-full text-sm text-left text-gray-500'>
        <thead className="text-sm text-grey-700 bg-grey-50">
            <tr>
                <th className='py-3 px-6'>#</th>
                <th  className='py-3 px-6'>Name</th>
                <th  className='py-3 px-6'>Phone Number</th>
                <th  className='py-3 px-6'>Created At</th>
                <th  className='py-3 px-6 text-center'>Action</th>
            </tr>
        </thead>
        <tbody className="animate-pulse">
            
                <tr className="bg-white border-b hover:bg-gray-50 border-grey-50">
                    <td className='py-3 px-6'>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-20 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='flex justify-center gap-1 py-3'>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 border-grey-50">
                    <td className='py-3 px-6'>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-20 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='flex justify-center gap-1 py-3'>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 border-grey-50">
                    <td className='py-3 px-6'>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-20 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='flex justify-center gap-1 py-3'>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 border-grey-50">
                    <td className='py-3 px-6'>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-20 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='flex justify-center gap-1 py-3'>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 border-grey-50">
                    <td className='py-3 px-6'>
                        <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-20 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='py-3 px-6'>
                        <div className="h-4 w-32 rounded-full bg-gray-200"></div>
                    </td>
                    <td className='flex justify-center gap-1 py-3'>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-200"></div>
                    </td>
                </tr>
        </tbody>
    </table>
    )
}