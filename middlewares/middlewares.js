const status = {
    ok: 200,
    notFound: 404,
    badRequest: 400
}

var middleWares = {
    checkNumQueryInteger: (oRequest, oResponse, next) => 
    {
        console.log(oRequest.query.num);
        oRequest.query.num = Number(oRequest.query.num)
       

        if(oRequest.query.num){
            if(oRequest.query.num >= 1){
                next()
            }else{
                oResponse.status(status.badRequest).send({msg:"num is lower"})
            }
        }else{
            oResponse.status(status.badRequest).send({msg:"num is lower"})
        }
        
    }

}

module.exports = middleWares