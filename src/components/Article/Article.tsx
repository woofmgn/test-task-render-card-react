import { Link } from "react-router-dom";

type ArticleProps = {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
};

export const Article = (props: ArticleProps) => {
  const { createdAt, title, preview, image, id } = props;

  return (
    <article className="flex flex-col shadow my-4">
      <a href="!#" className="hover:opacity-75">
        <img
          src={image}
          onError={(event: any) =>
            event.target.setAttribute(
              "src",
              "http://placeimg.com/640/480/fashion"
            )
          }
          alt="Статья, превью фотографии"
        />
      </a>
      <div className="bg-white flex flex-col justify-start p-6">
        <a href="!#" className="text-3xl font-bold hover:text-gray-700 pb-4">
          {title}
        </a>
        <p className="text-sm pb-3">
          By{" "}
          <a href="!#" className="font-semibold hover:text-gray-800">
            David Grzyb
          </a>
          , {createdAt}
        </p>
        <a href="!#" className="pb-6">
          {preview}
        </a>
        <Link
          to={`/posts/${id}`}
          className="uppercase text-gray-800 hover:text-black"
        >
          Continue Reading <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};
