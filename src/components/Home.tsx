import Header from "./Header";
import { HomeBody } from "./HomeBody";

const Home = () => {
  return (
    <>
      <Header />
      <div className="text-black w-full">
        <HomeBody />
      </div>
    </>
  );
};
export default Home;
