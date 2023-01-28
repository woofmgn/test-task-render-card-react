import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/Api";
import { IdataType } from "../../components/ArticlesList";

export const Post: FC = () => {
  const [post, setPost] = useState<IdataType>();
  let { postId } = useParams();

  const handleGetPost = async () => {
    if (postId) {
      const res = await api.getPost(postId);
      setPost(res);
    }
  };

  useEffect(() => {
    handleGetPost();
  }, [postId]);
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      <article className="flex flex-col shadow my-4">
        <a href="!#" className="hover:opacity-75">
          <img
            src={post && post.image}
            alt="фото"
            onError={(event: any) =>
              event.target.setAttribute(
                "src",
                "http://placeimg.com/640/480/fashion"
              )
            }
          />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a href="!#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {post && post.title}
          </a>
          <p className="text-sm pb-8">
            By{" "}
            <a href="!#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on {post && post.createdAt}
          </p>
          <h1 className="text-2xl font-bold pb-3">Introduction</h1>
          <p className="pb-3">{post && post.description}</p>
        </div>
      </article>

      <div className="w-full flex pt-6">
        <a
          href="!#"
          className="w-1/2 bg-white shadow hover:shadow-md text-left p-6"
        >
          <p className="text-lg text-blue-800 font-bold flex items-center">
            <i className="fas fa-arrow-left pr-1"></i> Previous
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
        <a
          href="!#"
          className="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
        >
          <p className="text-lg text-blue-800 font-bold flex items-center justify-end">
            Next <i className="fas fa-arrow-right pl-1"></i>
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
      </div>
    </section>
  );
};
