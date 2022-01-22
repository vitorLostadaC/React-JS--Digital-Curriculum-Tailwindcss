import { MenuLeft } from "./Components/MenuLeft/MenuLeft";
import { MenuRight } from "./Components/MenuRight/MenuRight";

export default function App() {
  return (
    <main className="bg-white max-w-3xl mx-auto mt-12 mb-12 shadow-[0_0_8px_rgb(13,12,12,.15)] grid grid-cols-[0.5fr_1fr] font-Roboto ">
      <MenuLeft />
      <MenuRight />
    </main>
  );
}
