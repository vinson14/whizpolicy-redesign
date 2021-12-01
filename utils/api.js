import { Amplify, API, Auth } from "aws-amplify";
import { differenceInCalendarYears } from "date-fns";
import differenceInYears from "date-fns/differenceInYears";
import awsmobile from "../src/aws-exports";
import { deserializeClient, findPolicyByPolicyId, serializeClientForm, formatPolicyFormValues } from "./utils";
const endpoint = "https://a3dk3p85vd.execute-api.us-east-1.amazonaws.com/dev";
const apiName = "whizpolicynodejsapi";
export const UsernameExistsException = "UsernameExistsException";

Amplify.configure(awsmobile);

const getJwtToken = async () => {
  const token = (await Auth.currentSession()).getIdToken().getJwtToken();
  return token;
};

export const getPolicies = async () => {
  const jwtToken = await getJwtToken();
  const response = await API.get(apiName, "/policies", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return response;
};

export const getClients = async () => {
  console.log("getClients Ran");
  const jwtToken = await getJwtToken();
  try {
    const clients = await API.get(apiName, "/clients", {
      headers: {
        Authorization: `${jwtToken}`,
      },
    });
    clients.forEach((client) => deserializeClient(client));
    return clients;
  } catch (err) {
    console.log(err);
  }
};

export const postClient = async (client) => {
  serializeClientForm(client);
  const jwtToken = await getJwtToken();
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
  serializeClientForm(client);
  const jwtToken = await getJwtToken();
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
  const jwtToken = await getJwtToken();
  const path = `/clients/${clientId}`;
  const init = {
    body: {},
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwtToken}`,
    },
  };

  const response = await API.del(apiName, path, init);
  console.log("Delete response", response);
  return response;
};

export const postPolicyToClient = async (client, policy) => {
  console.log("postPolicyToClient ran");
  const jwtToken = await getJwtToken();
  if (findPolicyByPolicyId(client.policies, policy.policyId)) {
    console.log("policy already exists");
    return;
  }
  formatPolicyFormValues(policy);
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
  formatPolicyFormValues(policy);
  const jwtToken = await getJwtToken();
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
  const jwtToken = await getJwtToken();
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
  const jwtToken = await getJwtToken();
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

export const deleteDependantToClient = async (client, dependant) => {
  const jwtToken = await getJwtToken();
  const path = `/clients/${client.clientId}/dependants/${dependant.name}`;
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

export const signInUser = async (user) => {
  try {
    const loggedInUser = await Auth.signIn(user.username, user.password);
    return { ok: true, loggedInUser };
  } catch (error) {
    return { ok: false, error };
  }
};

export const signUpUser = async (formData) => {
  try {
    const { user } = await Auth.signUp(formData);
    console.log(user);
    return { user, ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};

export const signOutUser = async () => {
  try {
    await Auth.signOut();
    return true;
  } catch (err) {
    console.log("error", err);
    return false;
  }
};

export const isUserAuthenticated = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    if (user) return true;
  } catch (error) {
    return false;
  }
};

export const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
    return true;
  } catch (err) {
    console.log("error", err);
    return false;
  }
};

export const resendConfirmation = async (username) => {
  try {
    await Auth.resendSignUp(username);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getDifferenceInCalendarYears = (earlierDate, laterDate) => {
  return differenceInCalendarYears(laterDate, earlierDate);
};
