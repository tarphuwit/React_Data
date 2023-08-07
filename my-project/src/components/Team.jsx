import React from "react";

const Team = () => {
  return (
    <div>
      <div class="flex items-center justify-center text-center">
        <div class="flex flex-col p-2 m-2  max-w-7xl ">
          <div class="text-xl md:text-3xl font-medium">
            ทีมงานรัฐประศาสนศาสตร์
          </div>
          <div class="text-sm mx-2 md:text-xl text-stone-500">
            Meet the team member who have contributed their designs for this
            websites.
          </div>
          <div class="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div>

          <div class="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
            <div class="flex-col px-6 py-2 ">
              <div class="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img src="image/p7.jpg" alt="" class="" />
              </div>

              <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                John Doe
              </div>
              <div class=" italic text-gray-500">CEO, Tailblocks</div>
            </div>
            <div class="flex-col px-6 py-2 ">
              <div class="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img src="image/p10.jpg" alt="" class="" />
              </div>

              <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Arkay
              </div>
              <div class=" italic text-gray-500">Executive Producer</div>
            </div>
            <div class="flex-col px-6 py-2 ">
              <div class="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img src="image/p12.jpg" alt="" class="" />
              </div>

              <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Elina Gilbert
              </div>
              <div class=" italic text-gray-500">HR</div>
            </div>
          </div>
          <div class="flex space-x-4 space-y-2 p-2 items-center justify-center md:flex-row flex-col ">
            <div class="flex-col px-6 py-2 ">
              <div class="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img src="image/p13.jpg" alt="" class="" />
              </div>

              <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Clay Johnson
              </div>
              <div class=" italic text-gray-500">Manager</div>
            </div>
            <div class="flex-col px-6 py-2 ">
              <div class="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img src="image/p14.jpg" alt="" class="" />
              </div>

              <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Hannah Saw
              </div>
              <div class=" italic text-gray-500">Marketing Producer</div>
            </div>
            <div class="flex-col px-6 py-2 ">
              <div class="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img src="image/p15.jpg" alt="" class="" />
              </div>

              <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Wednesday Addams
              </div>
              <div class=" italic text-gray-500">Financer</div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default Team;
