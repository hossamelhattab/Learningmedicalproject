export default function Page() {
  return (
    <>
      <div className="flex border-2 border-black">
        <div
          className="bg-red-400 h-16"
          style={{ flexBasis: "100px", flexGrow: 1 }}
        >
          Welcome
        </div>

        <div
          className="bg-blue-400 h-16"
          style={{ flexBasis: "100px", flexGrow: 2 }}
        >
          Welcome
        </div>
      </div>

      <div className="flex border-2 border-black">
        <div className="bg-red-400 h-16" style={{ flex: "1" }}>
          Welcome
        </div>

        <div className="bg-blue-400 h-16" style={{ flex: "2" }}>
          Welcome
        </div>
      </div>

      <div className="text-[32px]">Hello world</div>

      <div className="text-[2rem]">Hello world</div>
    </>
  );
}
