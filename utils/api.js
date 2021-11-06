import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "../src/aws-exports";
const endpoint = "https://a3dk3p85vd.execute-api.us-east-1.amazonaws.com/dev";
const apiName = "whizpolicynodejsapi";

Amplify.configure(awsmobile);

export const getPolicies = async () => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const response = await API.get(apiName, "/policies", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return response;
};

export const getClients = async () => {
  console.log("getClients Ran");
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const response = await API.get(apiName, "/clients", {
    headers: {
      Authorization: `${jwtToken}`,
    },
  });
  return response;
};

export const postClient = async (client) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = "/clients";
  const init = {
    body: {
      ...client,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };
  const response = await API.post(apiName, path, init);
  return response;
};

export const putClient = async (client) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = "/clients";
  const init = {
    body: {
      ...client,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };
  const response = await API.put(apiName, path, init);
  return response;
};

export const deleteClient = async (clientId) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = `/clients/${clientId}`;
  const init = {
    body: {},
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };

  const response = await API.del(apiName, path, init);
  return response;
};
