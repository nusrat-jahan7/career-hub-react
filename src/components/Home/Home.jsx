import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <div className="bg-purple-100">
        <Banner></Banner>
      </div>
      <Categories></Categories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
