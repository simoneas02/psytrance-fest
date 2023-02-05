import http from "../http-common";

const festivalDataService = () => {
  const getAll = async () => {
    try {
      const { data } = await http.get("/festivals");
      return [null, data];
    } catch (error) {
      return [error];
    }
  };

  return { getAll };
};

export default festivalDataService;
