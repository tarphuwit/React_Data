import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="px-5 bg-green-800 rounded-lg">
        <div class="self-center top-0 w-full max-w-7xl p-0 ">
          <div class="flex justify-between items-center text-gray-700 p-5 ">
            <div class="mx-2 my-4">
              <ion-icon
                name="logo-pwa"
                class="text-5xl text-blue-600 hover:text-stone-600"
              ></ion-icon>
            </div>
            <ul class="hidden md:flex items-center text-[18px] font-semibold pr-10">
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หลักสูตรรัฐประศาสนศาสตร์</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หน้าหลัก</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/team">เกี่ยวกับ</a>
              </li>
              <li class="text-white hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/service">บริการ</a>
              </li>
              <li class="text-slate-50 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">ยุทธศาสตร์</a>
              </li>
              <li class="text-slate-50 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <Link to="/contact">ติดต่อ</Link>
              </li>
              <li class="text-slate-50 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                <Link to="/login">LogIn</Link>
              </li>
              <li class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                <a href="#">SignUp</a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};
export default Navbar;
