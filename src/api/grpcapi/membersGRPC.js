import { MembersSvcClient } from "../../protos/gen/Members_grpc_web_pb";
import { MemberExistRequest } from "../../protos/gen/Members_pb";
import { URL, METADATA } from "../../utils/constants";

const membersGRPC = () => {
  const client = new MembersSvcClient(URL, null, null);

  function createMember(param) {
    try {
      //   console.log(client);
      const request = new MemberExistRequest();
      request.setMobilenumber(param.telephoneNo);
      request.setMembertype(param.role);

      return new Promise((resolve, reject) => {
        client.checkIfMemberExist(request, METADATA, (err, response) => {
          console.log(err);
          console.log(response);
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
