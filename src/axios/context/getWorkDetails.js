import axiosInstance from '../axiosInstance';

// get work
export const getWorkData = (pageNumber) => {
  return getWorkDataAsync(pageNumber)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      // console.log("error 1->", error);
      return error;
    });
};

const getWorkDataAsync = async (pageNumber) => {
  try {
    const response = await axiosInstance.get(`/workdetails?page=${pageNumber}`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};

// by Id

export const getWorkDatabyId = (workId) => {
    return getWorkDataById(workId)
      .then((result) => {
          return result.data;
      })
      .catch((error) => {
          // console.log('error 1->', error);
        return error;
      })
}


const getWorkDataById = async (id) => {
    try {
        const response = await axiosInstance.get(`/workdetails/${id}`);
        
        const body = await response; 
        return body;
    } catch (error) {
        return error;
    }
}