import { RiDoubleQuotesL } from "@remixicon/react";

export default function CardSkeleton() {
    return (
        <div className="rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
            <div className="rounded-lg p-6 max-w-96 bg-white">
                <div className="mt-8 mb-8">
                    <RiDoubleQuotesL size={32} className="text-[#006FEE]" />
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-64 ms-8 my-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 ms-8 my-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-40 ms-8 my-4"></div>
                </div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            </div>
        </div>
    )
}