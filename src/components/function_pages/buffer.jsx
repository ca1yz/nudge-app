import React from "react";
import Screen from "../screen";

const Buffer = ({ title, text, onNext }) => {
    return (
        <Screen>
            <div className="px-6 py-4 w-full">
                <div className="text-center text-lg font-semibold h-10">{title}</div>
                    <div className="space-y-2 py-2">

                    </div>
                <div className=' h-12'> 
                </div>
                <div>
                    <div className="text-center text-sm">
                        {text}
                    </div>
                </div>
            </div>

            <div className="">
                <button className="w-16 -translate-y-0.5"
                    onClick={onNext}>
                    <div className="flex justify-center w-full">
                        <p className="text-xs text-gray-600">Next</p>
                    </div>
                </button>
            </div>
        </Screen>
      );
}

export default Buffer;