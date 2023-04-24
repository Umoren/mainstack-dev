import TabsComponent from "./components/common/TabsComponent";
import LayoutComponent from "./components/layout/LayoutComponent";

function App() {
  return (
    <>
      <LayoutComponent>
        <section className="mt-20 relative left-[17.7rem] w-[93%]">
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
        </section>
      </LayoutComponent>
    </>
  );
}

export default App;
