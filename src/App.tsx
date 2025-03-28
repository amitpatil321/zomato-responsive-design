import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosPin,
  IoMdArrowDropright,
} from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import "./App.css";

function App() {
  const [shareTarget, setShareTarget] = useState<string>("");
  return (
    <div className="w-full h-screen">
      <div className="bg-[url(/images/main.png)] bg-cover bg-no-repeat bg-center w-full h-[50%] md:h-[60%]">
        <div className="lg:hidden flex justify-between px-4 pt-4 text-white">
          <div className="font-semibold text-sm">Get the App</div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex gap-4 mr-4 text-white text-lg">
              <a href="#">Investor Relations</a>
              <a href="#">Add Restaurant</a>
            </div>
            <img
              className="rounded-full w-auto h-8 md:h-10 cursor-pointer"
              src="https://b.zmtcdn.com/data/user_profile_pictures/29d/42decbcf806935bb5003e0aedb8fb29d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            />
            <div className="hidden md:flex items-center gap-2 font-semibold text-sm cursor-pointer">
              <span>Amit</span>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {/* xl:justify-end */}
        <div className="flex flex-col justify-center items-center gap-6 mx-auto pb-20 w-full h-full">
          <img
            src="/images/logo-big.png"
            alt="logo"
            className="bg-transparent h-8 md:h-16"
          />
          <h2 className="max-w-[400px] sm:max-w-full text-white text-2xl md:text-3xl text-center">
            Discover the best food & drinks in Pune
          </h2>

          <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-0 w-[95%] text-light-50">
            <div className="flex items-center bg-white px-4 border md:border-0 rounded-lg md:rounded-r-none w-full md:w-[40%] h-12">
              <IoIosPin className="text-gray-500 text-xl" />
              <input
                placeholder="Delivery location"
                className="flex-1 bg-transparent outline-none h-full text-gray-950 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center bg-white px-4 border md:border-0 rounded-lg md:rounded-l-none w-full md:w-[60%] h-12">
              <IoFastFoodOutline className="mr-2 text-gray-500 text-xl" />
              <input
                placeholder="Search for restaurant, cuisine or a dish"
                className="flex-1 bg-transparent outline-none h-full text-gray-950 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 px-6 sm:px-0 pt-3 sm:pt-10 sm:h-60">
        <div className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <img
            className="w-full h-36 object-cover"
            src="/images/order-online.jpeg"
            alt="Order Online"
          />
          <div className="bottom-0 absolute bg-white px-4 py-2 w-full">
            <div className="md:font-normal font-semibold text-gray-700 text-sm md:text-xl">
              Order Online
            </div>
            <div className="text-gray-500 text-xs md:text-base line-clamp-1">
              Stay home and order to your doorstep
            </div>
          </div>
        </div>

        <div className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <img
            className="w-full h-36 object-cover"
            src="/images/dining.jpeg"
            alt="Order Online"
          />
          <div className="bottom-0 absolute bg-white px-4 py-2 w-full">
            <div className="md:font-normal font-semibold text-gray-700 text-sm md:text-xl">
              Dining
            </div>
            <div className="text-gray-500 text-xs md:text-base line-clamp-1">
              View the city's favorite dining venues
            </div>
          </div>
        </div>

        <div className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
          <img
            className="w-full h-36 object-cover"
            src="/images/live-events.png"
            alt="Live events"
          />
          <div className="bottom-0 absolute bg-white px-4 py-2 w-full">
            <div className="md:font-normal font-semibold text-gray-700 text-sm md:text-xl">
              Live Events
            </div>
            <div className="text-gray-500 text-xs md:text-base line-clamp-1">
              Discover India's best events & concerts
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h4 className="font-semibold text-gray-700 text-lg sm:text-3xl">
          Collections
        </h4>
        <p className="mt-2 md:font-thin text-gray-700 text-sm md:text-xl">
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
              className="relative bg-cover bg-no-repeat bg-center rounded-lg h-60 md:h-80 text-white"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="bottom-0 left-0 absolute bg-gradient-to-t from-black/90 via-black/70 to-transparent/20 px-3 py-4 rounded-b-lg w-full text-sm">
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
        <h4 className="font-semibold text-gray-700 text-lg sm:text-3xl">
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

      <div className="bg-primary-50 mt-12 sm:mt-20 p-6 w-full">
        <div className="flex flex-row">
          <img src="images/get-app.png" className="hidden md:flex w-[50%]" />

          <div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-medium text-3xl">Get the Zomato app</h2>
              <p className="font-normal text-gray-600 text-center">
                We will send you a link, open it on your phone to download the
                app
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
              <div className="flex gap-2 mt-4">
                {shareTarget === "email" ? (
                  <input
                    name="email"
                    placeholder="Email"
                    type="text"
                    className="px-4 border rounded-lg outline-none w-[100%] h-12"
                  />
                ) : (
                  <div
                    id="phone"
                    className="flex justify-between items-center bg-white border rounded-lg h-12 overflow-hidden"
                  >
                    <input
                      name="country"
                      placeholder="Country"
                      type="text"
                      value="+91"
                      className="px-4 border-r outline-none w-[30%] h-8"
                    />
                    <input
                      name="phone"
                      placeholder="Phone"
                      type="text"
                      className="px-4 outline-none w-[70%] h-8"
                    />
                  </div>
                )}
                <button className="bg-primary-500 px-4 rounded-lg text-white">
                  Share
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4 mt-4 align-middle">
              <p className="text-gray-400">Download app from</p>
              <div className="flex gap-4">
                <img src="/images/google-store.png" className="w-auto h-10" />
                <img src="/images/apple-store.png" className="w-auto h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h4 className="font-semibold text-gray-700 text-xl">
          Explore options near me
        </h4>
        <div className="gap-4 grid grid-cols-1 mt-4">
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

        <div className="flex">
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="bg-gray-100 mt-10 p-6 w-full">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="/images/logo-clean.png"
              alt="logo"
              className="h-8 md:h-8 text-gray-950"
            />
          </div>
          <div className="flex gap-4">
            <div>India</div>
            <div>English</div>
          </div>
        </div>

        <div className="gap-4 grid grid-cols-2 md:grid-cols-5 mt-8 text-light-600">
          <div className="">
            <h6 className="pb-4 font-semibold text-gray-950 uppercase tracking-widest">
              About Zomato
            </h6>
            <nav>
              <a href="https://www.zomato.com/who-we-are">
                <p>Who We Are</p>
              </a>
              <a href="https://blog.zomato.com/">
                <p>Blog</p>
              </a>
              <a href="https://www.zomato.com/careers">
                <p>Work With Us</p>
              </a>
              <a href="https://www.zomato.com/investor-relations">
                <p>Investor Relations</p>
              </a>
              <a href="https://www.zomato.com/report-fraud">
                <p>Report Fraud</p>
              </a>
              <a href="https://blog.zomato.com/press-kit">
                <p>Press Kit</p>
              </a>
              <a href="https://www.zomato.com/contact">
                <p>Contact Us</p>
              </a>
            </nav>
          </div>
          <div>
            <h6 className="pb-4 font-semibold text-gray-950 uppercase tracking-widest">
              Zomaverse
            </h6>
            <nav>
              <a href="https://www.zomato.com/">
                <p>Zomato</p>
              </a>
              <a href="https://www.blinkit.com/">
                <p>Blinkit</p>
              </a>
              <a href="https://www.district.in/">
                <p>District</p>
              </a>
              <a href="https://www.feedingindia.org/">
                <p>Feeding India</p>
              </a>
              <a href="https://www.hyperpure.com/">
                <p>Hyperpure</p>
              </a>
              <a href="https://www.zomato.com/live">
                <p>Zomato Live</p>
              </a>
              <a href="https://www.zomato.com/zomaland">
                <p>Zomaland</p>
              </a>
              <a href="https://www.weatherunion.com/">
                <p>Weather Union</p>
              </a>
            </nav>
          </div>
          <div>
            <div>
              <h6 className="pb-4 font-semibold text-gray-950 uppercase tracking-widest">
                For Restaurants
              </h6>
              <nav>
                <a href="https://www.zomato.com/partner_with_us">
                  <p>Partner With Us</p>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&amp;hl=en_IN&amp;gl=US">
                  <p>Apps For You</p>
                </a>
              </nav>
            </div>
          </div>
          <div>
            <h6 className="pb-4 font-semibold text-gray-950 uppercase tracking-widest">
              Learn More
            </h6>
            <nav>
              <a href="https://www.zomato.com/privacy">
                <p>Privacy</p>
              </a>
              <a href="https://www.zomato.com/security">
                <p>Security</p>
              </a>
              <a href="https://www.zomato.com/conditions">
                <p>Terms</p>
              </a>
            </nav>
          </div>
          <div className="hidden md:block">
            <h6 className="pb-4 font-semibold text-gray-950 uppercase tracking-widest">
              Social Links
            </h6>
            <div className="flex flex-col gap-2">
              <img src="/images/apple-store.png" className="w-36 h-11" />
              <img src="/images/google-store.png" className="w-36 h-11" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-gray-300 border-t">
          <p className="text-gray-600 text-sm">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2025 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
