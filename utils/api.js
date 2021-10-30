const endpoint = "https://a3dk3p85vd.execute-api.us-east-1.amazonaws.com/dev";

export const getClients = async () => {
  const response = await fetch(`${endpoint}/clients`);
  return await response.json();
};

export const getPolicies = async () => {
  const response = await fetch(`${endpoint}/policies`);
  return await response.json();
};
