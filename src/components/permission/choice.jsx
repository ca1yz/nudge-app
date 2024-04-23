// src/components/permission/choice.jsx

const Choice = ({ name }) => {
    return (
        <div className="flex flex-col mr-1">
                <label className="flex items-center">
                    <input type="radio" name={name.toLowerCase()} className="form-radio h-4 w-4 text-blue-600" />
                    <span className="ml-1 text-sm">Allow</span>
                </label>
                <label className="flex items-center mt-1">
                    <input type="radio" name={name.toLowerCase()} className="form-radio h-4 w-4 text-blue-600" />
                    <span className="ml-1 text-sm">Disable</span>
                </label>
        </div>
    );
};

export default Choice;