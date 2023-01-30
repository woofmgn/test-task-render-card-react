import { FC } from "react";
import { ArticlesList } from "../../components/ArticlesList/ArticlesList";

export const Main: FC = () => {
  return (
    <section className="w-full flex flex-col items-center content-center px-3">
      <ArticlesList />
    </section>
  );
};
