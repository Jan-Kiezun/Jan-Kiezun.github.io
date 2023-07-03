function WelcomeButtons() {
  const buttonStyle =
    "bg-yellow-600 hover:bg-amber-600/90 text-white font-semi py-1 px-4 rounded text-3xl font-monospace transition duration-200 ease-in-out";
  return (
    <div className="flex flex-row justify-around gap-2">
      <button className={buttonStyle}>GitHub</button>
      <button className={buttonStyle}>LinkedIn</button>
      <button className={buttonStyle}>Resume</button>
      <button className={buttonStyle}>Email</button>
    </div>
  );
}

export default WelcomeButtons;
