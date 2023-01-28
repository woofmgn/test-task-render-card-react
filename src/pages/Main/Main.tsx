import { ArticlesList } from "../../components/ArticlesList";

export const Main = () => {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      <ArticlesList />
    </section>
  );
};
