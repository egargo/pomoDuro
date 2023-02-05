import Header from "../../components/Header";
import Time from "../Time";
import Todo from "../Todo";
import "./index.scss";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div id="home">
        <Time />
        <Todo />
      </div>
    </>
  );
};

export default Home;
