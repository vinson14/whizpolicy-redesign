import {
  addClientFormFields,
  addPolicyFormFields,
  INPUT_TYPE_CURRENCY,
  INPUT_TYPE_YEAR,
} from "../data/ui";

export const getInitials = (name) => {
  try {
    const words = name.split(" ");
    return words[0].charAt(0) + words[1].charAt(0);
  } catch (err) {
    return name.substring(0, 2);
  }
};

export const findClientById = (clients, id) => {
  return clients.find((client) => client.clientId == id);
};

export const findPolicyByPolicyId = (policies, policyId) => {
  return policies.find((policy) => policy.policyId == policyId);
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

export const getRandomAvatarColor = () => {
  const colors = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ];
  const shades = ["main", "light", "dark"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShade = shades[Math.floor(Math.random() * shades.length)];
  return `${randomColor}.${randomShade}`;
};

export const formatPolicyFormValues = (formData) => {
  const fieldsToFormat = Object.keys(addPolicyFormFields).filter(
    (field) =>
      addPolicyFormFields[field].type === INPUT_TYPE_CURRENCY ||
      addPolicyFormFields[field].type === INPUT_TYPE_YEAR
  );
  fieldsToFormat.forEach(
    (field) => (formData[field] = formatFormInt(formData[field]))
  );
};

export const formatClientFormValues = (formData) => {
  const fieldsToFormat = Object.keys(addClientFormFields).filter(
    (field) =>
      addClientFormFields[field].type === INPUT_TYPE_CURRENCY ||
      addClientFormFields[field].type === INPUT_TYPE_YEAR
  );
  fieldsToFormat.forEach(
    (field) => (formData[field] = formatFormInt(formData[field]))
  );
};
