//function to get comment data
console.log(axios);
async function getComment(URL){
    // axios.get(URL).then((data)=>{
    //     console.log(data);
    // })
    // .catch(err=>console.log(err));.
    
    // const Axiosget=await axios.get(URL);
    // console.log(Axiosget);

    try{
        const Axiosget=await axios.get(URL);
        console.log(Axiosget);
    }catch(error){
        console.log(error);
    }

}
getComment("https://jsonplaceholder.typicode.com/comments");


async function addBlog(URL,title,description){
    try{
        let newBlog={
        title:title,
        description:description
        }
        let response=await axios.post(URL,newBlog);
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
}
addBlog("http://localhost:3000/blog","first blog","first blog description");