
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen place-items-center p-20 gap-12">
      <div className="w-80 h-80 text-white flex items-center justify-center font-bold text-3xl rounded-lg bg-red-600">
        Red
      </div>
      <div className="w-80 h-80 text-white flex items-center justify-center font-bold text-3xl rounded-lg bg-blue-600">
        Blue
      </div>
      <div className="w-80 h-80 text-white flex items-center justify-center font-bold text-3xl rounded-lg bg-green-600">
        Green
      </div>
      <div className="w-80 h-80 text-white flex items-center justify-center font-bold text-3xl rounded-lg bg-yellow-600">
        Yellow
      </div>
    </main>
  );
}

