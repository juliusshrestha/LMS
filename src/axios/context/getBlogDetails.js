import axiosInstance from "../axiosInstance";
// get blog
export const getBlogsData = () => {
  return getBlogsDataAsync()
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      // console.log("error 1->", error);
      return error;
    });
};

const getBlogsDataAsync = async () => {
  try {
    const response = await axiosInstance.get(`/blogDetail`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};

// by page

export const getBlogsDataByPage = (pageNumber) => {
  return getBlogsDataByPageAsync(pageNumber)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      // console.log("error 1->", error);
      return error;
    });
};

const getBlogsDataByPageAsync = async (pageNumber) => {
  try {
    const response = await axiosInstance.get(`/bloglist?page=${pageNumber}`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};

// by Id

export const getBlogsDatabyId = (blogId) => {
  return getBlogsDataByIdAsync(blogId)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      // console.log("error 1->", error);
      return error;
    });
};

const getBlogsDataByIdAsync = async (id) => {
  try {
    const response = await axiosInstance.get(`/bloglist/${id}`);

    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};

// by slug

export const getBlogsDataByCategory = (category, page) => {
  return getBlogsDataByCategoryAsync(category, page)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      // console.log("error 1->", error);
      return error;
    });
};

const getBlogsDataByCategoryAsync = async (category, page) => {
  try {
    const response = await axiosInstance.get(`/bloglist/?category=${category}&page=${page}`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};

// similar post 

export const getSimilarBlog = (category, id) => {
  return getSimilarBlogAsync(category, id)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      // console.log("error 1->", error);
      return error;
    });
};

const getSimilarBlogAsync = async (category, id) => {
  try {
    const response = await axiosInstance.get(
      `/bloglist/?category=${category}&exclude=${id}`
    );
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
};
