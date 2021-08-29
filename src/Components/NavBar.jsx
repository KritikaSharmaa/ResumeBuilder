const NavBar = ({ type }) => {
  return (
    <div
      className={`h-20 flex justify-between ${
        type === "Home" ? "bg-MateBlack" : "bg-transparent"
      }`}
    >
      <div className="flex items-center text-3xl font-semibold text-LightPurple ml-1">
        Resume Builder
      </div>
      <div className="h-full w-8/12 hidden lg:flex justify-end items-center cursor-default">
        {type === "Template" ? (
          <>
            {" "}
            <button
              className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple flex justify-center items-center border-none"
            >
              All
            </button>
            <button
              className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple flex justify-center items-center border-none ml-20"
            >
              Free
            </button>
          </>
        ) : (
          <button
            className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple flex justify-center items-center border-none"
          >
            Templates
          </button>
        )}
        <button
          className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple flex justify-center items-center border-none ml-16"
        >
          Liked
          <span className="material-icons-outlined font-semibold ml-1">
            favorite_border
          </span>
        </button>
        {/* <span className="material-icons-outlined ml-20 text-gray-300 font-semibold">
          translate
        </span> */}
        <span className="material-icons-outlined ml-20 text-gray-300 font-semibold">
          shopping_bag
        </span>
        <span className="material-icons-outlined ml-20 mr-5 text-gray-300 font-semibold">
          settings
        </span>
      </div>
      <div className="h-full w-16 mr-4 flex justify-center items-center text-BabyPink lg:hidden">
        <span class="material-icons-outlined">menu</span>
      </div>
    </div>
  );
};
export default NavBar;
