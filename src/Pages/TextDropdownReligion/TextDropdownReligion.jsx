import React, { useState } from "react";

const TextDropdownReligion = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const options = ["ইসলাম", "হিন্দু", "খ্রিষ্টান", "বৌদ্ধ", "অন্য"];

    return (
        <div className="relative w-full">
            {/* Input + Arrow */}
            <div
                className="flex items-center border rounded px-2 py-1 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <input
                    type="text"
                    value={value}
                    placeholder="বাছাই করুন"
                    className="flex-1 outline-none"
                    readOnly
                    required
                    name="religion"
                />

                {/* Arrow toggle */}
                <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
                    ▼
                </span>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-10 bg-white border w-full mt-1 rounded shadow">
                    {options.map((opt) => (
                        <div
                            key={opt}
                            className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setValue(opt);
                                setOpen(false);
                            }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TextDropdownReligion;
