import { useEffect, useState } from "react";
import { api } from "../api/Api";
import { Article } from "./Article/Article";
import { Pagination } from "./Pagination/Pagination";

export interface IdataType {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export const ArticlesList = () => {
  const [article, setArticle] = useState<Array<IdataType>>([]);

  const getList = async () => {
    const res = await api.getArticle();
    setArticle(() => res);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {article.map((item) => {
        return <Article key={item.id} {...item} />;
      })}
      <Pagination />
    </>
  );
};
