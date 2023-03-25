import axiosInstance from "../axiosInstance";

//get team
export const getTeamDetails = () => {
  return getTeamDetailsAsync()
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      //   console.log('error 1->', error);
      return error;
    });
};

const getTeamDetailsAsync = async () => {
  try {
    const response = await axiosInstance.get("/team");
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};
