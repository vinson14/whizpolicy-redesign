export const getInitials = (name) => {
  const words = name.split(" ");

  return words[0].charAt(0) + words[1].charAt(0);
};

export const findClientById = (clients, id) => {
  return clients.find((client) => client.id == id);
};

export const findPolicyByPolicyNumber = (policies, policyNumber) => {
  return policies.find((policy) => policy.policyNumber == policyNumber);
};

export function formatNumber(num, decPlaces = 0) {
  if (!num) return " - ";
  return num.toFixed(decPlaces).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatString(string) {
  const properCase = string.replace(/([A-Z])/g, " $1");
  return properCase.charAt(0).toUpperCase() + properCase.slice(1);
}
