import { UsePaginationReturn } from "../../hooks/usePagination";

export const Pagination = ({
  nextPage,
  prevPage,
  page,
  setPage,
  totalPages,
}: UsePaginationReturn) => {
  return (
    <div className="flex items-center py-8">
      <button
        onClick={prevPage}
        className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center mr-2"
      >
        <i className="fas fa-arrow-left ml-2" />
      </button>
      {/* @ts-ignore */}
      {[...Array(totalPages).keys()].map((el) => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className={`h-10 w-10 bg-blue-600 hover:bg-blue-400 font-semibold text-white text-sm flex items-center justify-center mr-1 ${
            page === el + 1 ? "bg-blue-900" : ""
          }`}
        >
          {el + 1}
        </button>
      ))}
      <button
        onClick={nextPage}
        className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center"
      >
        <i className="fas fa-arrow-right ml-2" />
      </button>
    </div>
  );
};
