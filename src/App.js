import Footer from "./components/Footer";
import Header from "./components/Header";

import patternPc from "./assets/images/bg-pattern-intro-right-desktop.svg";
import patternLPc from "./assets/images/bg-pattern-intro-left-desktop.svg";
import Humanizing from "./components/Humanizing";
import Different from "./components/Different";
import FindOut from "./components/FindOut";
function App() {
  return (
    <div className="App font-Karla ">
      <Header />
      <main className="relative w-full overflow-hidden md:py-10">
        <div className="absolute top-0 left-0 w-full -z-10 bg-dark-Violet h-[100%] md:h-[35%]"></div>
        <img className="absolute -top-[5%] right-0 hidden md:block" src={patternPc} alt="" />
        <img className="absolute top-[25%] -left-0 hidden md:block" src={patternLPc} alt="" />
        <Humanizing />
        <Different />
        <FindOut />
      </main>
      <Footer />
    </div>
  );
}

export default App;
