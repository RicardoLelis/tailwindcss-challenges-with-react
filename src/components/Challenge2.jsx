import React from 'react';

const Challenge2 = () => {
    return (
        <div>
            <div className="bg-gray-300 p-4 text-center mb-4">
                <h1 className="">Challenge 2 - Text Styling</h1>
            </div>
            <div className="p-4">
                {/* <!-- Title case heading 1 text in dark gray --> */}
                <h1 className="capitalize text-xl text-gray-900">Lorem ipsum dolor sit amet consectetur.</h1>
                
                {/* <!-- Paragraph styling with 1.5 line heights & letter spacing --> */}
                <p className="mt-3 leading-loose tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
                </p>
                
                {/* <!-- Treated like a quote with a background and plenty of padding. Italic title --> */}
                <div className="m-2 p-6 bg-blue-900 text-blue-200">
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
                    </p>
                    <p className="mt-3 text-gray-400">- Victor Gonzalez, <span className="italic">instructor</span></p>
                </div>
                {/* <!-- Call to action button, blue with good padding and uppercase --> */}
                <button className="uppercase bg-blue-500 text-blue-100 px-4 py-3">Enroll Now</button>

            </div>
        </div>
    )
}

export default Challenge2;