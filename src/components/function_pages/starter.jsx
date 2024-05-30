import React from "react";
import Screen from "../screen";
import { useNavigate } from "react-router-dom";

const StarterPage = ({ onNext }) => {
    // const navigate = useNavigate();

    return (
        <Screen>
            <div className="px-6 py-4 w-full">
                <div className="text-center text-lg font-semibold h-10">Starter</div>
                <div className="space-y-2 py-2">
                </div>
                <div className=' h-12'> 
                </div>
    
            </div>
            <div className="">
                <button className="w-16 -translate-y-0.5"
                 onClick={onNext}>
                    <h1 className="text-xs text-gray-600">Next</h1>
                </button>
            </div>
        </Screen>
      );
    
}

export default StarterPage;