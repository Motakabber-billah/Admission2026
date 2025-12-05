import TextDropDownClass from "../TextDropDownClass/TextDropDownClass";
import TextDropdownGender from "../TextDropDownGender/TextDropDownGender";
import TextDropdownReligion from "../TextDropdownReligion/TextDropdownReligion";
import Photo from '../../assets/default-photo.jpg';

const Form = () => {
    return (
        <div className="mt-6">
            <div>
                <form>
                    <h2 className="text-xl md:text-2xl text-center">বিদ্যালয়ে ভর্তির আবেদন- ২০২৬</h2>
                    <h2 className="text-xl text-center">সমস্ত তথ্য অবশ্যই <span className="font-bold">ইংরেজিতে</span> পূরণ করতে হবে। <span className="text-red-700">লাল তারকা (*)</span> চিহ্ণিত তথ্যগুলো অবশ্যই প্রদান করতে হবে।</h2>
                    <div>
                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">
                            {/* আবেদনকারীর নাম */}
                            <div className="flex flex-col items-start gap-2 mb-3 ">
                                <span className="label-text text-base md:text-xl dark:text-black">নাম <span className="text-red-700">*</span></span>
                                <input type="text" name="name" placeholder="নাম লিখুন" className="dark:text-white input input-bordered input-success w-full" required />
                            </div>

                            {/*  জন্ম তারিখ*/}
                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/3">
                                    <span className="label-text text-base md:text-xl dark:text-black">জন্ম তারিখ <span className="text-red-700">*</span></span>
                                    <input type="date" name="dob" placeholder="জন্ম তারিখ লিখুন" className="dark:text-white input input-bordered input-success w-full" required />
                                </div>

                                {/*জন্ম নিবন্ধনের নম্বর  */}
                                <div className="flex flex-col gap-2 w-full md:w-2/3">
                                    <span className="label-text text-base md:text-xl dark:text-black">জন্ম নিবন্ধনের নম্বর <span className="text-red-700">*</span></span>
                                    <input type="number" name="brn" placeholder="জন্ম নিবন্ধনের নম্বর লিখুন" className="dark:text-white input input-bordered input-success w-full dark:text-white" required />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row w-ful gap-5 mb-5">

                                {/* শিক্ষার্থীর ধরণ/জেন্ডার */}
                                <div className="w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">শিক্ষার্থীর ধরণ/জেন্ডার <span className="text-red-700">*</span></span>
                                    <span><TextDropdownGender></TextDropdownGender></span>
                                </div>

                                {/* শিক্ষার্থীর ধর্ম */}
                                <div className="w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">শিক্ষার্থীর ধর্ম <span className="text-red-700">*</span></span>
                                    <TextDropdownReligion></TextDropdownReligion>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">
                                {/* মোবাইল নম্বর */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">মোবাইল নম্বর <span className="text-red-700">*</span></span>
                                    <input type="number" name="phone" placeholder="মোবাইল নম্বর লিখুন" className="input input-bordered input-success w-full dark:text-white" />
                                </div>

                                {/* মোবাইল নম্বরটি আবার লিখুন */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">মোবাইল নম্বরটি আবার লিখুন <span className="text-red-700">*</span></span>
                                    <input type="number" name="phone" placeholder="মোবাইল নম্বরটি আবার লিখুন" className="input input-bordered input-success w-full dark:text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">
                            <h2 className="text-[14px] md:text-[18px] text-red-600 text-center mb-4 dark:text-black">পিতা এবং মাতা বর্তমান থাকলে অভিভাবকের তথ্য প্রয়োজন নাই। তবে, পিতা অথবা মাতার অবর্তমানে অভিভাবকের তথ্য বাধ্যতামূলক।</h2>
                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">

                                {/* পিতার নাম */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">পিতার নাম <span className="text-red-700">*</span></span>
                                    <input type="text" name="fatherName" placeholder="পিতার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>

                                {/* পিতার এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">পিতার এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর <span className="text-red-700">*</span></span>
                                    <input type="number" name="fatherNid" placeholder="পিতার এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">

                                {/* মাতার নাম */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">মাতার নাম <span className="text-red-700">*</span></span>
                                    <input type="text" name="matherName" placeholder="মাতার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>

                                {/* মাতার এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">মাতার এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর <span className="text-red-700">*</span></span>
                                    <input type="number" name="matherNid" placeholder="মাতার এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">

                                {/* অভিভাবকের নাম */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">অভিভাবকের নাম</span>
                                    <input type="text" name="guardianName" placeholder="অভিভাবকের নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" />
                                </div>

                                {/* অভিভাবকের এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর */}
                                <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
                                    <span className="label-text text-base md:text-xl dark:text-black">অভিভাবকের এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর </span>
                                    <input type="number" name="guardianNid" placeholder="অভিভাবকের এনআইডি/জন্ম নিবন্ধন/পাসপোর্ট নম্বর লিখুন" className="input input-bordered input-success w-full dark:text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">
                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">

                                {/* শ্রেণি */}
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <span className="label-text text-base md:text-xl dark:text-black">শ্রেণি<span className="text-red-700">*</span></span>
                                    <TextDropDownClass></TextDropDownClass>
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">
                            <div className="flex flex-col md:flex-row w-full gap-5 mb-5">

                                {/* পূর্বে অধ্যয়নকৃত বিদ্যালয়ের নাম */}
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <span className="label-text text-base md:text-xl dark:text-black">পূর্বে অধ্যয়নকৃত বিদ্যালয়ের নাম<span className="text-red-700">*</span></span>
                                    <input type="text" name="previousSchoolName" placeholder="বিদ্যালয়ের নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>

                                {/* পূর্বে অধ্যয়নকৃত শ্রেণি */}
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <span className="label-text text-base md:text-xl dark:text-black">পূর্বে অধ্যয়নকৃত শ্রেণি<span className="text-red-700">*</span></span>
                                    <input type="text" name="previousClass" placeholder="পূর্বে অধ্যয়নকৃত শ্রেণি লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">

                            {/* বর্তমান ঠিকানা */}
                            <div className="flex flex-col w-full gap-5 mb-5">
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <span className="text-base md:text-xl">বর্তমান ঠিকানা</span>
                                    <span className="label-text text-base md:text-xl dark:text-black">বিস্তারিত ঠিকানা<span className="text-red-700">*</span></span>
                                    <input type="text" name="addressLine1" placeholder="এখানে জেলা এবং থানা লেখার প্রয়োজন নাই।" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">জেলার নাম <span className="text-red-700">*</span></span>
                                        <input type="text" name="division" placeholder="জেলার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">উপজেলার নাম <span className="text-red-700">*</span></span>
                                        <input type="text" name="district" placeholder="উপজেলার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">থানার নাম <span className="text-red-700">*</span></span>
                                        <input type="text" name="thana" placeholder="থানার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">পোস্ট কোড <span className="text-red-700">*</span></span>
                                        <input type="text" name="postCode" placeholder="পোস্ট কোড লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">

                            {/* স্থায়ী ঠিকানা */}
                            <div className="flex flex-col w-full gap-5 mb-5">
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <span className="text-base md:text-xl dark:text-black">স্থায়ী ঠিকানা</span>
                                    <span className="label-text text-base md:text-xl dark:text-black">বিস্তারিত ঠিকানা<span className="text-red-700">*</span></span>
                                    <input type="text" name="addressLine1" placeholder="এখানে জেলা এবং থানা লেখার প্রয়োজন নাই।" className="input input-bordered input-success w-full dark:text-white" required />
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">জেলার নাম <span className="text-red-700">*</span></span>
                                        <input type="text" name="division" placeholder="জেলার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">উপজেলার নাম <span className="text-red-700">*</span></span>
                                        <input type="text" name="district" placeholder="উপজেলার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">থানার নাম <span className="text-red-700">*</span></span>
                                        <input type="text" name="thana" placeholder="থানার নাম লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full md:w-1/4">
                                        <span className="label-text text-base md:text-xl dark:text-black">পোস্ট কোড <span className="text-red-700">*</span></span>
                                        <input type="text" name="postCode" placeholder="পোস্ট কোড লিখুন" className="input input-bordered input-success w-full dark:text-white" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">

                            {/* প্রার্থীর ছবি */}
                            <div className="dark:bg-white bg-base-200">
                                <div className="flex flex-col lg:flex-row w-full p-4">
                                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                                        <h2 className="text-xl md:text-2xl text-center mb-3 dark:text-black">প্রার্থীর ছবি</h2>
                                        <div className="flex items-center justify-center">
                                            <img src={Photo} className="rounded-lg shadow-2xl w-40 h-40" />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 pt-12">
                                        <h1 className="text-base md:text-xl font-bold mb-5 dark:text-black">
                                            ছবির দৈর্ঘ্য ও প্রস্থ্য অবশ্যই 300X300 পিক্সেল এবং সাইজ 100 কিলোবাইটের নিচে হতে হবে।</h1>
                                        <div className="flex justify-start">
                                            <input type="file" name="image" className="file-input file-input-bordered w-full max-w-xs dark:text-white" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-orange-400 rounded-lg p-4 mt-5 mb-6">
                            <div className="mb-5">
                                <label className="flex items-center justify-center gap-10">
                                    <input type="checkbox"  className="checkbox checkbox-secondary" required/>
                                    <span className="label-text text-base dark:text-black">আমি অঙ্গীকার করছি যে উপরে প্রদানকৃত সকল তথ্য সঠিক।</span>
                                </label>
                            </div>

                            <div className="text-center ">
                                <input className="border border-green-600 px-4 py-2 rounded-md hover:bg-green-800 hover:text-red-500 text-xl font-bold" type="submit" name="submit" value="Submit" />
                            </div>
                        </div>

                    </div>


                </form>

            </div>
        </div>
    );
};

export default Form;