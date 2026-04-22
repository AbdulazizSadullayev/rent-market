import { Pencil } from 'lucide-react';


const AddressTabs = () => {
    return (
        <>
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Платёжный адрес</h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <div className="text-sm text-gray-500 mb-1">Адрес</div>
                        <div className="font-semibold text-gray-900">Амира Темура, 123</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500 mb-1">Населённый пункт</div>
                        <div className="font-semibold text-gray-900">100420</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500 mb-1">Область</div>
                        <div className="font-semibold text-gray-900">Ташкент</div>
                    </div>
                </div>

                <button
                    onClick={() => console.log('Edit address clicked')}
                    className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    <Pencil size={16} className="text-gray-600" />
                </button>
            </div>
        </>
    )
}

export default AddressTabs