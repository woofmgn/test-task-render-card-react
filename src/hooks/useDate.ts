import { IdataType } from '../components/ArticlesList/ArticlesList';


export const useDate = () => {

  const normalizeDate = (date: IdataType[]) => {
    const newArr = date.map((item) => {
      const newDate = new Date(item.createdAt);
      return { ...item, createdAt: newDate.toLocaleString() };
    });
    return newArr;
  };
  
  const normalizePostDate = (newPost: IdataType) => {
    const date = new Date(newPost.createdAt);
    return { ...newPost, createdAt: date.toLocaleString() };
  };

  return {
    normalizeDate,
    normalizePostDate
  }
}