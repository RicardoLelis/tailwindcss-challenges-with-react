import React from 'react';

const Challenge6 = () => {
    return (
        <div>
            <div className="bg-gray-300 p-4 text-center mb-4">
                <h1 className="">Challenge 6 - Employe Card</h1>
            </div>

            {/* Instructor Solution: */}
            <div className='h-auto flex justify-center'>
                <div className="bg-gray-600 flex justify-center items-center">
                    <div className='w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='bg-gray-200 text-gray-700 text-lg px-6 py-4'>The title of the card here</div>

                        <div className='flex justify-between items-center px-6 py-4 '>
                            <div className='bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold'>Under Review</div>
                            <div className='text-sm'>May, 14, 1988</div>
                        </div>

                        <div className='px-6 py-4 border-t border-gray-200'>
                            <div className='border rounded-lg p-4 bg-gray-200'>
                                Here is a short comment about this employee
                            </div>
                        </div>

                        <div className='bg-gray-200 px-6 py-4'>
                            <div className='uppercase text-cs text-gray-600 font-bold'>Employee</div>

                            <div className='flex items-center pt-3'>
                                <div className='bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full font-bold text-white'>VG</div>
                                <div className='ml-4'>
                                    <p className='font-bold'>Victor Gonzalez</p>
                                    <p className='text-sm text-gray-700 mt-1'>Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>

                {/* my Solution: */}

                <div className='ml-4 h-auto flex justify-center'>
                    <div className='w-96 h-auto rounded-lg border'>
                        <div className='p-6 mb-2 bg-gray-200 '>
                            <p className='text-gray-800'>The title of the card here</p>
                        </div>
                        <div className='p-4 mb-2 border-b flex justify-between items-center'>
                            <span className='bg-orange-600 px-3 py-2 rounded-full text-white uppercase'>Under Review</span>
                            <p className='text-gray-800'>May 14, 1988</p>
                        </div>
                        <div className='p-4 mb-2'>
                            <div className='bg-gray-200 rounded-lg p-6'>
                                <p>Here is a short comment about this employee.</p>
                            </div>
                        </div>
                        <div className='p-6 bg-gray-200'>
                            <div>
                                <p className='uppercase text-gray-800'>Employee</p>
                            </div>
                            <div className='mt-2 flex items-center'>
                                <span className='bg-blue-500 text-blue-100 rounded-full p-5'>VG</span>
                                <div className='ml-4'>
                                    <h3 className='font-bold'>Victor Gonzalez</h3>
                                    <p className='text-gray-800 text-sm mt-1'>Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            </div>
            
            {/* my Solution: */}
            {/* <div className='h-auto flex justify-center'>
                <div className='w-96 h-auto rounded-lg border'>
                    <div className='p-6 mb-2 bg-gray-200 '>
                        <p className='text-gray-800'>The title of the card here</p>
                    </div>
                    <div className='p-4 mb-2 border-b flex justify-between items-center'>
                        <span className='bg-orange-600 px-3 py-2 rounded-full text-white uppercase'>Under Review</span>
                        <p className='text-gray-800'>May 14, 1988</p>
                    </div>
                    <div className='p-4 mb-2'>
                        <div className='bg-gray-200 rounded-lg p-6'>
                            <p>Here is a short comment about this employee.</p>
                        </div>
                    </div>
                    <div className='p-6 bg-gray-200'>
                        <div>
                            <p className='uppercase text-gray-800'>Employee</p>
                        </div>
                        <div className='mt-2 flex items-center'>
                            <span className='bg-blue-500 text-blue-100 rounded-full p-5'>VG</span>
                            <div className='ml-4'>
                                <h3 className='font-bold'>Victor Gonzalez</h3>
                                <p className='text-gray-800 text-sm mt-1'>Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Challenge6;