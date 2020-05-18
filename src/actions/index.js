import axios from 'axios';

const URL = "https://5eb3eeeb974fee0016ecdd88.mockapi.io/blog"

export function getBlog(id){

    const blog = axios.get(`${URL}/${id}`)
        .then(response => response.data.data)

      return{
          type: "SINGLE_BLOG",
          payload: blog
      }
}


export function getAllBlogs(){

    const blogs = axios.get(URL)
        .then(response => response.data.data)

      return{
          type: "ALL_BLOGS",
          payload: blogs
      }
}