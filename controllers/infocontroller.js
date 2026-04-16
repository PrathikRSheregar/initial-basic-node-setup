const info=(req,response)=>{
    response.status(statuscode.ok).send("api is alive");
}
module.exports={
    info
}