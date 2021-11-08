import { Amplify, API, Auth } from "aws-amplify";
import differenceInYears from "date-fns/differenceInYears";
import awsmobile from "../src/aws-exports";
import { findPolicyByPolicyId } from "./utils";
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
  try {
    const response = await API.get(apiName, "/clients", {
      headers: {
        Authorization: `${jwtToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postClient = async (client) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = "/clients";
  const init = {
    body: { ...client },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };
  try {
    const response = await API.post(apiName, path, init);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const putClient = async (client) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = `/clients/${client.clientId}`;
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

export const postPolicyToClient = async (client, policy) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  if (findPolicyByPolicyId(client.policies, policy.policyId)) {
    console.log("policy already exists");
    return;
  }
  const path = `/clients/${client.clientId}/policies`;
  const init = {
    body: { ...policy },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };

  try {
    const response = await API.post(apiName, path, init);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const putPolicyToClient = async (client, policy) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = `/clients/${client.clientId}/policies/${policy.policyId}`;
  const init = {
    body: { ...policy },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };
  try {
    const response = await API.put(apiName, path, init);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deletePolicyToClient = async (client, policy) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = `/clients/${client.clientId}/policies/${policy.policyId}`;
  const init = {
    body: {},
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };
  try {
    const response = await API.del(apiName, path, init);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postDependantToClient = async (client, dependant) => {
  const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const path = `/clients/${client.clientId}/dependants`;
  const init = {
    body: { ...dependant },
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };

  try {
    const response = await API.post(apiName, path, init);
    return response;
  } catch (err) {
    console.log(err);
  }
};
