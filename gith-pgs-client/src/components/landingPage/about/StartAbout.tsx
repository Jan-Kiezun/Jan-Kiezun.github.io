function StartAbout() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-yellow-500 px-8">
      <div className="min-h-[calc(100vh-50px)] w-1/2 flex justify-center">
        <h1 className="text-4xl font-bold text-center mt-20">About me</h1>
      </div>
      <div className="flex flex-col justify-center items-center text-amber-100 bg-slate-800 rounded-xl w-1/2 min-h-[calc(100vh-50px)] p-6">
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptates voluptatem quos
          voluptatibus quod doloribus quas natus. Quisquam voluptatum,
          quibusdam, quia, quae voluptates voluptatem quos voluptatibus quod
          doloribus quas natus. Quisquam voluptatum, quibusdam, quia, quae
          voluptates voluptatem quos voluptatibus quod doloribus quas natus.
          Quisquam
        </p>
      </div>
    </div>
  );
}

export default StartAbout;
