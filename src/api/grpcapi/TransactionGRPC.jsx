import { METADATA ,URL} from "../../utils/constants";
import {TransactionSvcClient}  from "../../protos/gen/Transaction_grpc_web_pb"
import {PostDataRequest,CardDataRequest} from "../../protos/gen/Transaction_pb"


function TransactionAPI(){
    const client = new TransactionSvcClient(URL,null,null) //initalizes the client to use

    // FUNCTION TO POST A NEW TRANSACTION
    function postNewTransaction(data){
        const request = new PostDataRequest() //initalize request 
        // SETTING REQUEST BODY TO POST
        request.setMobileno(data.Mobileno)
        request.setMemberid(data.Memberid)
        request.setTranstypejmorgcc(data.Transactiontype)
        request.setTransamount(data.Transamount)
        request.setPaymentacctormomono(data.PaymentAccountorMomo)
        request.setPaymentaccountname(data.Paymentaccountname)
        request.setNetworkid(data.Network)
        request.setNarration(data.Narration)
        request.setAgentid(data.Agentid)
    
        return new Promise((resolve, reject) =>{

            client.postDataToTransaction(request,METADATA,(err,resp)=>{
                if(err){
                    reject(err)
                }
                const result = resp?.toObject()
                resolve(result)
            })
            
        })
    }


    // FUNCTION FOR CARD TRANSACTION
    function postCardTransaction(data){
        // INITALIZE A REQUEST TO POST CARD DATA
        const request = new CardDataRequest()
        request.setAccountname(data.Accountname)
        request.setCardnumber(data.Cardnumber)
        request.setCvv(data.Cvv)
        request.setExpirydatemonth(data.Expirydate)
        request.setExpirydateyear(data.Expirydatyear)
        request.setTranstypejmorgcc(data.Jmorggc)
        request.setMobileno(data.Mobileno)
        request.setMemberid(data.Memberid)
        request.setTransamount(data.Transamount)
        request.setNarration(data.Narration)
        request.setServiceid(data.Serviceid)
        request.setAgentid(data.Agentid)


        return new Promise((resolve, reject) =>{
            client.postDataToTransactionCard(request,METADATA,(err,response)=>{
                if(err){
                    reject(err) //reject nad return from function when error is encounted
                }
                const result = response?.toObject();
                console.log(result)
                resolve(result)
            })
        });
    }



    return {postNewTransaction,postCardTransaction}
}

export default TransactionAPI;