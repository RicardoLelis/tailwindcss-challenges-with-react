import React from 'react';

const Challenge5 = () => {
    return (
        <div>
            <div className="bg-gray-300 p-4 text-center mb-4">
                <h1 className="">Challenge 5 - Input Component</h1>
            </div>
            {/* my Solution: */}
            {/* <div className="w-96 h-64 flex flex-col justify-center items-center border">
                <h2 className='mb-2 text-gray-700 font-bold'>Full Name</h2>
                <input className='border p-2 rounded mb-2 text-gray-200 shadow-md' placeholder='Enter your full Name'/>
                <button className='bg-blue-500 text-blue-200 px-3 py-2 rounded'>Save</button>
            </div> */}

            {/* Instructor Solution: */}
            <div className='h-96 flex flex-col justify-center items-center '>                
                <div className='flex flex-col justify-center items-center'>
                    <label className='text-gray-700 text-sm font-bold select-none' for='full name'>Full Name</label>
                    <input className='mt-2 shadow border rounded-lg px-3 py-2 text-gray-700 focus:bg-blue-100 placeholder-indigo-300' 
                        id='full_name' 
                        placeholder='Enter your full name'
                    />
                    <button className='mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg'>Save</button>
                </div>
            </div>

        </div>
    )
}

export default Challenge5;