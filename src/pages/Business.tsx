import OrderTabs from '@/components/tabs/tabsOrder';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AcountTabs from '@/components/tabs/tabsAcount';
import AddressTabs from '@/components/tabs/tabsaddresses';

const Business = () => {
  return (
    <div>
      <div className="mt-[10px]">
        <div className="container bg-white border border-gray-200 rounded-3xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover border border-gray-200"
              />
              <div>
                <div className="text-lg font-semibold">Eleanor Pena</div>
                <div className="text-sm text-gray-500">Admin</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">Выйти</button>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600"
              >
                Профиль
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600"
              >
                Заказы
              </TabsTrigger>
              <TabsTrigger
                value="downloads"
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600"
              >
                Загрузки
              </TabsTrigger>
              <TabsTrigger
                value="addresses"
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600"
              >
                Адреса
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab Content */}
            <TabsContent value="profile">
                <AcountTabs />
            </TabsContent>

            {/* Orders Tab Content */}
            <TabsContent value="orders">
                <OrderTabs />
            </TabsContent>

            {/* Downloads Tab Content */}
            <TabsContent value="downloads">
              <div className="text-center py-12">
                <p className="text-gray-500">Загрузки будут отображаться здесь</p>
              </div>
            </TabsContent>

            {/* Addresses Tab Content */}
            <TabsContent value="addresses">
              <AddressTabs />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Business;
