import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "../src/aws-exports";
const endpoint = "https://a3dk3p85vd.execute-api.us-east-1.amazonaws.com/dev";

Amplify.configure(awsmobile);

export const getPolicies = async () => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const response = await API.get("whizpolicyclientsapi", "/policies", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return response;
};

export const getClients = async () => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const response = await API.get("whizpolicyclientsapi", "/clients", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return response;
};
