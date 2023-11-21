import { METADATA, URL } from "../../utils/constants";

import { CardTypeSvcClient } from "../../protos/gen/CardType_grpc_web_pb";
import { CardData } from "../../protos/gen/CardType_pb";

function CardTypeAPI() {
  const client = new CardTypeSvcClient(URL, null, null);

  // GET CARDS FUCNTION
  async function getCardTypes() {
    const request = new CardData(); //initialise a request

    return new Promise((resolve, reject) => {
      // creating a call
      client.getAllCardTypes(request, METADATA, (err, response) => {
        if (err) {
          reject(err);
        }
        const result = response?.toObject(); // extrating the data from the response object
        resolve(result); //resolve the response
      });
    });
  }

  // RETURN API FUNCTIONS
  return { getCardTypes };
}

export default CardTypeAPI;
