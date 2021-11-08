export const getInitials = (name) => {
  try {
    const words = name.split(" ");
    return words[0].charAt(0) + words[1].charAt(0);
  } catch (err) {
    return "AB";
  }
};

export const findClientById = (clients, id) => {
  return clients.find((client) => client.clientId == id);
};

export const findPolicyByPolicyNumber = (policies, policyNumber) => {
  return policies.find((policy) => policy.policyNumber == policyNumber);
};

export function formatNumber(num, decPlaces = 0) {
  try {
    return num.toFixed(decPlaces).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } catch (err) {
    return num;
  }
}

export function formatString(string) {
  try {
    const properCase = string.replace(/([A-Z])/g, " $1");
    return properCase.charAt(0).toUpperCase() + properCase.slice(1);
  } catch (err) {
    return string;
  }
}

export const formatFormInt = (string) => {
  if (string === "") return 0;
  return parseInt(string);
};
