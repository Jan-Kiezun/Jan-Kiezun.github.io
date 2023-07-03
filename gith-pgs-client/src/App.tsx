import StartView from "./components/landingPage/startView/StartView";
import StartAbout from "./components/landingPage/about/StartAbout";
import StartProjects from "./components/landingPage/projects/StartProjects";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <StartView />
      <StartAbout />
      <StartProjects />
      {scrollY === 0 ? (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
          <div className="animate-bounce">
            <svg
              className="w-10 h-10 text-amber-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3.33333C10.4608 3.33333 10.8333 3.70587 10.8333 4.16667V16.6667C10.8333 17.1275 10.4608 17.5 10 17.5C9.53921 17.5 9.16667 17.1275 9.16667 16.6667V4.16667C9.16667 3.70587 9.53921 3.33333 10 3.33333Z" />
              <path d="M3.33333 10C3.33333 9.53921 3.70587 9.16667 4.16667 9.16667H16.6667C17.1275 9.16667 17.5 9.53921 17.5 10C17.5 10.4608 17.1275 10.8333 16.6667 10.8333H4.16667C3.70587 10.8333 3.33333 10.4608 3.33333 10Z" />
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
