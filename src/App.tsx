import LineChartComponent from "./components/common/LineChartComponent";
import TabsComponent from "./components/common/TabsComponent";
import LayoutComponent from "./components/layout/LayoutComponent";
import CardComponent from "./components/common/CardComponent";
import { top_locations, top_sources } from "./components/common/sourcesData";

function App() {

  return (
    <>
      <LayoutComponent>
        <main className="mt-20 relative left-[17.7rem] w-[93%]">
          <section className="px-12 flex justify-between items-start">
            <div className="space-y-2">
              <h2 className="text-xl text-black"> Good morning, Blessing ⛅️ </h2>
              <p className="text-sm text-ms-gray-500 "> Check out your dashboard summary. </p>
            </div>

            <div>
              <a href="/#" className="text-ms-orange text-sm"> View analytics </a>
            </div>
          </section>

          <section className="px-12 py-6">
            <TabsComponent />
          </section>

          <section className="mx-12 pt-6 pb-3 border border-[#EFF1F6] rounded-lg w-[90%]">
            <div className="flex justify-between items-center mx-12">
              <div>
                <h3 className="text-lg text-black"> Page Views</h3>
                <p className="text-sm text-ms-gray-400 pt-1"> All time </p>
              </div>

              <div>
                <img src="/assets/vectors/info.svg" alt="info" />
              </div>
            </div>

            <h1 className="text-black text-2xl mx-12 pt-2"> 500 </h1>

            <LineChartComponent />
          </section>

          <section className="mx-12 flex space-x-8">
            <CardComponent sources={top_locations} title="Top Locations" />
            <CardComponent sources={top_sources} title="Top Sources" />
          </section>
        </main>
      </LayoutComponent>
    </>
  );
}

export default App;
