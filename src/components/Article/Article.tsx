import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/photonotfound.jpg";

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

  const [imgSrc, setImgSrc] = useState<string | undefined>(image);

  const changeImg = () => {
    setImgSrc(img);
  };

  return (
    <article className="md:w-1/4 w-300 h-400 flex flex-col shadow my-4 ">
      <img
        className="w-full"
        src={imgSrc}
        onError={changeImg}
        alt="Статья, превью фотографии"
      />
      <div className="bg-white flex flex-col justify-start p-6">
        <h2 className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</h2>
        <p className="text-sm pb-3">
          <span className="font-semibold hover:text-gray-800">Created By</span>,{" "}
          {createdAt}
        </p>
        <p className="pb-6">{preview}</p>
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
