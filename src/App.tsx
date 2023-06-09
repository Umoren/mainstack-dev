import LineChartComponent from "./components/common/LineChartComponent";
import TabsComponent from "./components/common/TabsComponent";
import LayoutComponent from "./components/layout/LayoutComponent";
import CardComponent from "./components/common/CardComponent";
import { top_locations, top_sources } from "./components/common/sourcesData";
import { useState } from "react";
import { tabOptions } from "./components/common/TabsComponent";

function App() {
  const [activeTab, setActiveTab] = useState<number>(-1);

  const handleTabClick = (value: number) => {
    setActiveTab(value);
  };

  const selectedTabLabel = tabOptions.find((option) => option.value === activeTab)?.label;

  return (
    <>
      <LayoutComponent>
        <main className="mt-20 md:relative md:left-[17.7rem] md:w-[93%] w-full">
          <section className="md:px-12 flex justify-between items-start">
            <div className="md:space-y-2">
              <h2 className="text-lg md:text-xl text-black"> Good morning, Blessing ⛅️ </h2>
              <p className="text-sm text-ms-gray-500 "> Check out your dashboard summary. </p>
            </div>

            <div>
              <a href="/#" className="text-ms-orange text-xs md:text-sm"> View analytics </a>
            </div>
          </section>

          <section className="md:px-12 py-6">
            <TabsComponent activeTab={activeTab} onTabClick={handleTabClick} />
          </section>

          <section className="md:mx-12 pt-6 pb-3 border border-[#EFF1F6] rounded-lg md:w-[90%]">
            <div className="flex justify-between items-center mx-6 md:mx-12">
              <div>
                <h3 className="text-lg text-black"> Page Views</h3>
                <p className="text-sm text-ms-gray-400 pt-1">{selectedTabLabel}</p>
              </div>

              <div>
                <img src="/assets/vectors/info.svg" alt="info" />
              </div>
            </div>

            <h1 className="text-black text-[2rem] font-semibold md:text-2xl mx-6 md:mx-12 pt-2"> 500 </h1>

            <LineChartComponent />
          </section>

          <section className="md:mx-12 md:flex md:space-x-8">
            <CardComponent sources={top_locations} title="Top Locations" />
            <CardComponent sources={top_sources} title="Top Sources" />
          </section>
        </main>
      </LayoutComponent>
    </>
  );
}

export default App;
