

const createUser = async()=>{
  let res = await axios.post("http://localhost:4000/user/create",{
    name:"axios",
    email:"axios@gmail.com",
    password:"123456"
  });
  console.log(res.data);
}

createUser();