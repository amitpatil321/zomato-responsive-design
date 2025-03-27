import { useState } from "react";
import { IoIosArrowForward, IoMdArrowDropright } from "react-icons/io";
import "./App.css";

function App() {
  const [shareTarget, setShareTarget] = useState<string>("");
  return (
    <div className="w-full h-screen">
      <div className="bg-[url(/images/main.png)] bg-cover bg-no-repeat bg-center w-full h-[50%]">
        <div className="sm:hidden flex justify-between px-4 pt-4 text-white">
          <div className="font-semibold text-sm">Get the App</div>
          <div>
            <img
              className="rounded-full w-8 h-8"
              src="https://b.zmtcdn.com/data/user_profile_pictures/29d/42decbcf806935bb5003e0aedb8fb29d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            />
          </div>
        </div>

        <div className="flex flex-col justify-end items-center gap-6 mx-auto pb-20 w-full h-full">
          <img
            src="/images/logo-big.png"
            alt="logo"
            className="bg-transparent w-32 h-34"
          />
          <h2 className="max-w-[400px] text-white text-2xl text-center">
            Discover the best food & drinks in Pune
          </h2>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 w-[95%] text-light-50">
            <input
              placeholder="Delivery location"
              className="px-4 rounded-lg outline-none w-full h-12 text-gray-950 placeholder-gray-500"
            />
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="px-4 rounded-lg outline-none w-full h-12 text-gray-950 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 px-6 sm:px-0 pt-3 sm:pt-10 sm:h-60">
        <div className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden">
          <img
            className="w-full h-36 object-cover"
            src="/images/order-online.jpeg"
            alt="Order Online"
          />
          <div className="bottom-0 absolute bg-white px-4 py-2 w-full">
            <div className="font-semibold text-gray-700 text-sm">
              Order Online
            </div>
            <div className="text-gray-500 text-xs line-clamp-1">
              Stay home and order to your doorstep
            </div>
          </div>
        </div>

        <div className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden">
          <img
            className="w-full h-36 object-cover"
            src="/images/dining.jpeg"
            alt="Order Online"
          />
          <div className="bottom-0 absolute bg-white px-4 py-2 w-full">
            <div className="font-semibold text-gray-700 text-sm">Dining</div>
            <div className="text-gray-500 text-xs line-clamp-1">
              View the city's favorite dining venues
            </div>
          </div>
        </div>

        <div className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden">
          <img
            className="w-full h-36 object-cover"
            src="/images/live-events.png"
            alt="Live events"
          />
          <div className="bottom-0 absolute bg-white px-4 py-2 w-full">
            <div className="font-semibold text-gray-700 text-sm">
              Live Events
            </div>
            <div className="text-gray-500 text-xs line-clamp-1">
              Discover India's best events & concerts
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h4 className="font-semibold text-gray-700 text-xl">Collections</h4>
        <p className="mt-2 text-gray-700 text-sm">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends
        </p>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-4">
          {[
            { img: "/images/trending.png", title: "Top trending spots" },
            { img: "/images/rooftop.png", title: "Best Rooftop Cafes" },
            { img: "/images/newly-opened.png", title: "Newly Opened" },
            { img: "/images/iftar-special.png", title: "Iftar Specials" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-cover bg-no-repeat bg-center rounded-lg h-48 text-white"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="bottom-0 left-0 absolute bg-gradient-to-t from-black/80 to-transparent px-3 py-2 rounded-b-lg w-full text-sm">
                <p className="font-semibold">{item.title}</p>
                <p className="flex items-center gap-1">
                  42 places <IoMdArrowDropright />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pt-6">
        <a
          href="#"
          className="flex items-center gap-1 text-primary-500 text-sm"
        >
          <span>All collections in Pune </span>
          <IoMdArrowDropright />
        </a>
      </div>

      <div className="mt-8 px-6">
        <h4 className="font-semibold text-gray-700 text-xl">
          Popular localities in and around Pune
        </h4>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-4">
          {[
            { place: "Baner", count: 717 },
            { place: "Viman Nagar", count: 694 },
            { place: "Hinjewadi", count: 1424 },
            { place: "Koregaon Park", count: 258 },
            { place: "Wakad", count: 1032 },
            { place: "Kothrud", count: 809 },
            { place: "Shivajinagar", count: 176 },
            { place: "Kalyani Nagar", count: 694 },
            { place: "Kharadi", count: 895 },
          ].map((item) => {
            return (
              <div className="flex justify-between items-center gap-2 shadow-sm px-6 py-4 border rounded-lg w-full">
                <div>
                  <p className="font-semibold text-gray-700">{item.place}</p>
                  <p className="text-gray-600">{item.count} Places</p>
                </div>
                <IoIosArrowForward />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-primary-50 mt-12 p-6 w-full">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-medium text-3xl">Get the Zomato app</h2>
          <p className="font-normal text-gray-600 text-center">
            We will send you a link, open it on your phone to download the app
          </p>
        </div>

        <div className="mt-6">
          <div className="flex gap-4 mt-4">
            <div className="flex gap-2">
              <input
                className="w-[20px] h-[20px] accent-primary-500 cursor-pointer"
                type="radio"
                name="applink"
                onClick={() => setShareTarget("email")}
              />
              <span className="font-normal text-gray-600">Email</span>
            </div>
            <div className="flex gap-2">
              <input
                className="w-[20px] h-[20px] accent-primary-500 cursor-pointer"
                type="radio"
                name="applink"
                onClick={() => setShareTarget("phone")}
              />
              <span className="font-normal text-gray-600">Phone</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            {shareTarget === "email" ? (
              <input
                name="email"
                placeholder="Email"
                type="text"
                className="px-4 border rounded-lg outline-none w-full h-12"
              />
            ) : (
              <div
                id="phone"
                className="grid grid-cols-2 bg-white border rounded-lg"
              >
                <input
                  name="country"
                  placeholder="Country"
                  type="text"
                  className="px-4 outline-none w-full h-12"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  type="text"
                  className="px-4 outline-none w-full h-12"
                />
              </div>
            )}
            <button className="bg-primary-500 px-4 rounded-lg text-white">
              Share
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4 align-middle">
          <p className="text-gray-400">Download app from</p>
          <div className="flex gap-4">
            <img src="/images/google-store.png" className="w-auto h-10" />
            <img src="/images/apple-store.png" className="w-auto h-10" />
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h4 className="font-semibold text-gray-700 text-xl">
          Explore options near me
        </h4>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-4">
          {[
            { title: "Popular cuisines near me" },
            { title: "Popular restaurant types near me" },
            { title: "Top restaurant chains" },
            { title: "Cities we deliver to" },
          ].map((item) => {
            return (
              <div className="flex justify-between items-center gap-2 shadow-sm px-6 py-4 border rounded-lg w-full">
                <div>
                  <p className="text-[1.3rem] text-gray-700">{item.title}</p>
                </div>
                <IoIosArrowForward />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-96"></div>
    </div>
  );
}

export default App;
