function Navbar() {
  return (
    <div className="flex-none">
      <div className="block bg-[#FFF4ED] w-full h-[8%] shadow-lg">
        <div className="mx-auto max-w-full h-full">
          <div className="relative flex h-16 lg:h-full items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            /* Mobile menu button */
            </div>
            <div className="h-full flex flex-1 items-center justify-center sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-full lg:px-[11%]">
              <div className="h-full flex flex-shrink-0 items-center align-text-bottom">
                {/* <img src="@/assets/img/neksjob-banner.png" alt="" className="hidden lg:block h-8 w-auto"> */}
              </div>
              <div className="hidden sm:w-full sm:flex">
                Tite Nav
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
