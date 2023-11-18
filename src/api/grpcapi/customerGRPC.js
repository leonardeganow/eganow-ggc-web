import { CustomerSvcClient } from "../../protos/gen/Customer_grpc_web_pb";
import { EmptyUserRequest } from "../../protos/gen/Customer_pb";
import { URL, METADATA } from "../../utils/constants";

const customerGRPC = () => {
  const client = new CustomerSvcClient(URL, null, null);

  const getUsers = () => {
    try {
      return new Promise((resolve, reject) => {
        const request = new EmptyUserRequest();

        client.getAllUsers(request, METADATA, (err, response) => {
          if (err) {
            reject(err);
          }
          const result = response.toObject();
          //   console.log(result);
          resolve(result);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getUsers,
  };
};

export default customerGRPC;
