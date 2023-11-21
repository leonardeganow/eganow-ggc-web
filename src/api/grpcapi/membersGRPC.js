import { MembersSvcClient } from "../../protos/gen/Members_grpc_web_pb";
import { MemberExistRequest, JMOrGGCValues } from "../../protos/gen/Members_pb";
import { URL, METADATA } from "../../utils/constants";

const membersGRPC = () => {
  const client = new MembersSvcClient(URL, null, null);

  function createMember(param) {
    try {
      const request = new MemberExistRequest();
      request.setMobilenumber(param.telephoneNo);
      request.setMembertype(JMOrGGCValues[param.role]);
console.log(param);

      return new Promise((resolve, reject) => {
        client.checkIfMemberExist(request, METADATA, (err, response) => {
        
          if (err) {
            reject(err);
          }

          resolve(response?.toObject());
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    createMember,
  };
};

export default membersGRPC;
