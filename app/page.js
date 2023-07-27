import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-background-test bg-no-repeat bg-cover bg-center items-center">
      <div className="max-w-screen-2xl p-4 mb-24 mt-32">
        <h1 className="text-10-borde-color text-2xl">
          Our <span className="font-bold text-primary-color ">R8Write</span>{" "}
          rating will find the best rate for you
        </h1>
      </div>

      <div className="h-14">
        <input
          type="text"
          name="address"
          id="address"
          className="rounded-md border-solid border-white-light border-2 h-full w-96 mx-1 p-3"
          placeholder="Exa. 21 IntelAgent W S, InterlAgent, FL, 33165"
        />
        <input
          type="text"
          name="apt-unit"
          id="apt-unit"
          className="rounded-md border-solid border-white-light border-2 h-full w-32 mx-1 p-5"
          placeholder="Apt - Unit"
        />
        <button className="bg-primary-color text-white p-2 m-2 rounded-md shadow-lg shadow-blue-500/50 h-full w-52">
          Check my Address
        </button>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
