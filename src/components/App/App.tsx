import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main/Main";
import { Post } from "../../pages/Post/Post";

const App: React.FC = () => {
  return (
    <main className="container mx-auto flex flex-wrap py-6">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </main>
  );
};

export default App;
