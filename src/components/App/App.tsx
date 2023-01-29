import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main/Main";
import { Post } from "../../pages/Post/Post";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-wrap justify-center py-6">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/posts/:postId"} element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
