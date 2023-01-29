import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/Api";
import { IdataType } from "../../components/ArticlesList";
import { Preloader } from "../../components/Preloader/Preloader";
import img from "../../img/photonotfound.jpg";

export const Post: FC = () => {
  const [post, setPost] = useState<IdataType>();
  const [loading, setLoading] = useState<Boolean>(false);
  let { postId } = useParams();

  useEffect(() => {
    if (postId) {
      setLoading(true);
      api
        .getPost(postId)
        .then((res) => {
          setPost(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [postId]);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            <img
              className="w-full mr-auto ml-auto"
              src={post && post.image}
              alt="фото"
              onError={(event: any) => event.target.setAttribute("src", img)}
            />
            <div className="bg-white flex flex-col justify-start p-6">
              <h2 className="text-3xl font-bold hover:text-gray-700 pb-4">
                {post && post.title}
              </h2>
              <p className="text-sm pb-8">
                <span className="font-semibold hover:text-gray-800">
                  Published on
                </span>
                , {post && post.createdAt}
              </p>
              <p className="pb-3">{post && post.description}</p>
            </div>
          </article>

          <div className="w-full flex pt-6">
            <Link
              to={`/posts/${Number(postId) - 1}`}
              className="w-1/2 bg-white shadow hover:shadow-md text-left p-6"
            >
              <p className="text-lg text-blue-800 font-bold flex items-center">
                <i className="fas fa-arrow-left pr-1"></i> Previous
              </p>
            </Link>
            <Link
              to={`/posts/${Number(postId) + 1}`}
              className="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
            >
              <p className="text-lg text-blue-800 font-bold flex items-center justify-end">
                Next <i className="fas fa-arrow-right pl-1"></i>
              </p>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};
