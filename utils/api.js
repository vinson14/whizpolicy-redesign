const endpoint = "http://localhost:8000";

export const getClients = async () => {
  const response = await fetch(`${endpoint}/clients`);
  console.log("this ran");
  return await response.json();
};
