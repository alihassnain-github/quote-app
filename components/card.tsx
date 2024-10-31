import { RiDoubleQuotesL } from "@remixicon/react";

type propsType = {
    author: string | undefined,
    quote: string | undefined
}

export default function Card({ author, quote }: propsType) {
    return (
        <div className="rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
            <div className="rounded-lg p-6 max-w-96 bg-white">
                <div className="mt-8 mb-4">
                    <RiDoubleQuotesL size={32} className="text-[#006FEE]" />
                    <p className="md:text-lg text-md ms-8">
                        {quote}
                    </p>
                </div>
                <strong className="font-mono text-[#DB1056]">{author}</strong>
            </div>
        </div>
    )
}