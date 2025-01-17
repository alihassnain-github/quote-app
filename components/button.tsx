type propsType = {
    getQuote: () => void
}

export default function Button({ getQuote }: propsType) {
    return (
        <button type="button" onClick={getQuote} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8">Get Quote</button>
    )
}