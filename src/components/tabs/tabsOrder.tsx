const OrderTabs = () => {
    return (
        <>
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Количество заказов (2)</h2>
            </div>

            <div className="space-y-4">
                {/* Order Card 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Заказ</div>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                Велотренажер N30
                            </a>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Статус</div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-500">
                                Отменён
                            </span>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Дата</div>
                            <div className="text-sm text-gray-600">29 июля 2024 г. в 13:04</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Итого</div>
                            <div className="text-lg font-bold text-gray-900">850 000 сум</div>
                        </div>
                    </div>
                </div>

                {/* Order Card 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Заказ</div>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                Велосипед горный Trek
                            </a>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Статус</div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600">
                                Завершён
                            </span>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Дата</div>
                            <div className="text-sm text-gray-600">15 августа 2024 г. в 09:23</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Итого</div>
                            <div className="text-lg font-bold text-gray-900">1 200 000 сум</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderTabs