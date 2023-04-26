import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="">
      <h1 className="text-5xl font-bold">
        Buy 1 Cake & Get 3 Ice-cream{" "}
        <span className="animate-pulse text-green-500">FREE</span>
      </h1>
      <div className="flex gap-x-5 justify-center items-center py-10">
        <CakeView />
        <IcecreamView />
      </div>
      <UserView />
    </div>
  );
}

export default App;
