import React from "react";


const AnimatedButton = ({children}) => {
    return (
        <button className="animated-button">
            <div
               className="relative  items-center justify-center inline-block px-14 py-3 overflow-hidden font-medium text-indigo-600 rounded-3xl shadow-xl group">
                            <span
                                className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 bg-primary  rounded-full blur-md animate-pulse1"></span>
                                <span className="absolute inset-0 w-full h-full rotate-0 animate-spin1">
                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-secondary bg-blend-color-dodge rounded-full blur-xl"></span>
                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-shade bg-blend-color-dodge rounded-full blur-lg"></span>
                                  </span>
                                <span className="relative">
                                    {children}
                                </span>
            </div>
        </button>
    );
}

export default AnimatedButton;