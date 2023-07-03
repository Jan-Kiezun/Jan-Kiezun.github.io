import WelcomeButtons from "./WelcomeButtons";

function StartView() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900">
      <h1 draggable="false" className="text-[100px] select-none text-amber-100">
        Jan Kieżun
      </h1>
      <WelcomeButtons />
    </div>
  );
}

export default StartView;
