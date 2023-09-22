const Banner = () => {
  return (
    <div className="flex justify-center items-center container mt-4 mx-auto">
      <div className="flex-1">
        <h1 className="text-6xl font-bold">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-purple-500">Dream Job</span>
        </h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          commodi exercitationem consequatur modi eum adipisci nemo laboriosam
          voluptas voluptates, vitae doloremque vero perspiciatis? Itaque
          expedita aliquam ipsum libero facere similique!
        </p>
        <button className="btn bg-purple-500 text-white hover:bg-slate-700">
          Get Started
        </button>
      </div>
      <div className="flex-1">
        <img src="src/assets/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
