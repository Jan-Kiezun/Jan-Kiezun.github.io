import WelcomeButtons from "./WelcomeButtons";

function StartView() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[100px]">Jan Kieżun</h1>
      <WelcomeButtons />
    </div>
  );
}

export default StartView;
