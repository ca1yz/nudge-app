import React from "react";
import Screen from "../screen";
import Input from "antd/es/input/Input";
import { useState } from "react";

const { TextArea } = Input;

const Feedback = ({ text, onNext }) => {
    const [value, setValue] = useState('');

    const handleNext = () => {
        localStorage.setItem('vars_Feedback', value);
        onNext();
    }

    return (
        <Screen>
            <div className="px-6 py-4 w-full">
                <div className="text-center text-lg font-semibold h-10">Feedback</div>
                <div className="space-y-2 py-2">
                </div>
                <div className=' h-12'> 
                </div>
                <div>
                    <div className="pl-10 w-64 text-left text-sm">
                        {text}
                    </div>  

                </div>
                
                <div className="pt-4 h-56">
                    <TextArea
                        className="w-48"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter your feedback here"
                        autoSize={{
                        minRows: 3,
                        maxRows: 11,
                        }}
                        size="small"
                    />
                </div>
    
            </div>
            <div className="">
                <button className="w-16 -translate-y-0.5"
                 onClick={handleNext}>
                    <h1 className="text-xs text-gray-600 text-center">Send</h1>
                </button>
            </div>
        </Screen>
      );
}

export default Feedback;