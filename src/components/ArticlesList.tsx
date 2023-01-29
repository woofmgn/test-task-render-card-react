import { FC, useEffect, useState } from "react";
import { api } from "../api/Api";
import usePagination from "../hooks/usePagination";
import { Article } from "./Article/Article";
import { Pagination } from "./Pagination/Pagination";
import { Preloader } from "./Preloader/Preloader";
export interface IdataType {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export const ArticlesList: FC = () => {
  const [article, setArticle] = useState<Array<IdataType>>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: article.length,
  });

  useEffect(() => {
    setLoading(true);
    api
      .getArticle()
      .then((res) => {
        setArticle(() => res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="items flex flex-wrap gap-20 justify-center">
            {article
              .slice(firstContentIndex, lastContentIndex)
              .map((el: any) => (
                <Article key={el.id} {...el} />
              ))}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      )}
    </>
  );
};
