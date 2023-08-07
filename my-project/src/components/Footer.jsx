import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="flex justify-center items-center">
        <div class=" items-center w-full md:max-w-7xl bg-green-800 rounded-lg">
          <div class="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
            <p class="text-md font-semibold text-white md:text-lg md:text-white">
              {" "}
              Join Our Newsletter{" "}
            </p>
            <div class="md:text-lg">
              {" "}
              <input
                class="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-md placeholder-slate-400 px-2 py-1 focus:outline-none focus:border-cyan-600"
                type="email"
                placeholder="E-mail Address"
              />{" "}
              <button class="p-1 m-1 rounded-md text-white bg-blue-500 hover:text-blue-500 hover:bg-white hover:font-semibold hover:trandform ease-in-out duration-300">
                Subscribe{" "}
              </button>{" "}
            </div>
            <div class="text-center text-lg md:space-x-1">
              {" "}
              <a
                class="w-9 h-10 pt-1 m-2 md:ml-2 md:mr-0 inline-block border-1 rounded-lg text-white bg-blue-500 hover:bg-white hover:text-blue-500"
                href="#"
              >
                <li class="fa fa-twitter"></li>
              </a>{" "}
              <a
                class="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-orange-500 hover:bg-white hover:text-orange-500"
                href="#"
              >
                <li class="fa fa-google"></li>
              </a>{" "}
              <a
                class="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-red-500 hover:bg-white hover:text-red-500"
                href="#"
              >
                <li class="fa fa-linkedin"></li>
              </a>{" "}
              <a
                class="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg text-white bg-purple-500 hover:bg-white hover:text-purple-500"
                href="#"
              >
                <li class="fa fa-telegram"></li>
              </a>{" "}
              <a
                class="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg text-white bg-cyan-500 hover:bg-white hover:text-cyan-500"
                href="#"
              >
                <li class="fa fa-facebook"></li>
              </a>{" "}
            </div>
          </div>
          <hr class="mt-2 md:overflow-hidden" />
          <div class="grid grid-cols-2 my-3 text-center md:grid-cols-4">
            <div class="flex flex-col leading-7 items-start ml-20">
              <h1 class="text-orange-500 text-lg font-semibold">Product</h1>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Features
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Integrations
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Shopify Integrations
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Pricing
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Chrome Extensions
                </a>{" "}
              </p>
            </div>
            <div class="flex flex-col leading-7">
              <h1 class="text-orange-500 text-lg font-semibold">Company</h1>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Terms
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Customers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Blog
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Terms of Servics
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Privacy Policy
                </a>{" "}
              </p>
            </div>
            <div class="flex flex-col my-6 leading-7 md:my-0">
              <h1 class="text-orange-500 text-lg font-semibold">Support</h1>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Community
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Support Customers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Documentations
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Service Providers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Email Contact
                </a>{" "}
              </p>
            </div>
            <div class="flex flex-col my-6 leading-7 md:my-0">
              <h1 class="text-orange-500 text-lg font-semibold">Contact Us</h1>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  Support@admin.com
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-white hover:text-cyan-600" href="#">
                  (+91)700-788-67-00
                </a>{" "}
              </p>
            </div>
          </div>
          <hr class="mt-2 md:invisible" />
          <div class="flex flex-col items-center m-5 md:flex-row md:justify-between md:mx-28">
            {" "}
            <img src="https://dummyimage.com/150x50" alt="" />
            <div class="mt-4 text-white font-semibold">
              {" "}
              <a class="hover:text-white tracking-wide" href="#">
                DMCA
              </a>{" "}
              <strong>|</strong>{" "}
              <a class="hover:text-white tracking-normal" href="#">
                Security Statement
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
};

export default Footer;
