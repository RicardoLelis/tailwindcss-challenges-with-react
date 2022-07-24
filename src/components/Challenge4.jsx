import React from 'react';

const Challenge4 = () => {
    return (
        <div>
            <div className="bg-gray-300 p-4 text-center mb-4">
                <h1 className="">Challenge 4 - Block Gallery Challenge</h1>
            </div>
            {/* <!-- Must take up all of the available space -->
            <!-- Evenly distributed 3x3 grid -->
            <!-- Letters must be centered on the square -->
            <!-- Must have some spacing between the blocks --> */}
            <div className="h-screen flex flex-wrap">
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-100 m-2 w-full flex justify-center items-center">A</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-200 m-2 w-full flex justify-center items-center">B</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-300 m-2 w-full flex justify-center items-center">C</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-400 m-2 w-full flex justify-center items-center">D</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-500 m-2 w-full flex justify-center items-center">E</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-600 m-2 w-full flex justify-center items-center">F</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-700 m-2 w-full flex justify-center items-center">G</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-800 m-2 w-full flex justify-center items-center">H</div>
                </div>
                <div className="flex w-1/3 h-1/3">
                    <div class="bg-teal-900 m-2 w-full flex justify-center items-center">I</div>
                </div>

            </div>
        </div>
    )
}

export default Challenge4;