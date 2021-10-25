const endpoint = "http://localhost:3001";

export const getClients = async () => {
  const response = await fetch(`${endpoint}/clients`);
  return await response.json();
};

export const getPolicies = async () => {
  const response = await fetch(`${endpoint}/policies`);
  return await response.json();
};
