import axiosHttpClient from "../infra/axiosHttpClient";

const festivalDataService = () => {
  const getAll = async () =>
    await axiosHttpClient().axiosCall({
      method: "get",
      url: "/festivals",
    });

  const get = async (festivalId: string | string[]) =>
    await axiosHttpClient().axiosCall({
      method: "get",
      url: `/festivals?id=${festivalId}`,
    });

  return { getAll, get };
};

export default festivalDataService;
