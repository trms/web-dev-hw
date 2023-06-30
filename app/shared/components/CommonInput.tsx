export default function CommonInput({ inputItem }: any) {
    return (
        <div className="mb-5">
            <inputItem.icon
                className="h-6 w-6 text-primary inline mr-2 stroke-2 mb-1 md:inline md:h-8 md:w-8"
            />
            <label htmlFor={inputItem.name} className="text-lg mr-5 text-gray-600 tracking-wide md:text-xl">{inputItem.label}:</label>
            <input id={inputItem.name} name={inputItem.name} type={inputItem.inputType} required className="block text-gray-600 border-2 border-gray-500 px-4 bg-white py-1 text-lg rounded-full sm:inline-flex md:text-xl" />
        </div>
    );
}
