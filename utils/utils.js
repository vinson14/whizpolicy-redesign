import { ConstructionOutlined } from "@mui/icons-material";
import { differenceInYears, format } from "date-fns";
import {
  addClientFormFields,
  addPolicyFormFields,
  INPUT_TYPE_CURRENCY,
  INPUT_TYPE_YEAR,
  INPUT_TYPE_DATEPICKER,
  CLIENT_GIVEN_NAME_KEY,
  CLIENT_FAMILY_NAME_KEY,
} from "../data/ui";

export const getName = (client) => {
  return `${client[CLIENT_GIVEN_NAME_KEY]} ${client[CLIENT_FAMILY_NAME_KEY]}`;
};

export const getInitials = (client) => {
  try {
    return client[CLIENT_GIVEN_NAME_KEY].charAt(0) + client[CLIENT_FAMILY_NAME_KEY].charAt(0);
  } catch (err) {
    return "";
  }
};

export const findClientById = (clients, id) => {
  return clients ? clients.find((client) => client.clientId == id) : null;
};

export const findPolicyByPolicyId = (policies, policyId) => {
  return policies.find((policy) => policy.policyId == policyId);
};

export function formatNumber(num, decPlaces = 0) {
  try {
    return num.toFixed(decPlaces).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } catch (err) {
    console.log("error in formatting number", err);
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
  const colors = ["primary", "secondary", "error", "warning", "info", "success"];
  const shades = ["main", "light", "dark"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShade = shades[Math.floor(Math.random() * shades.length)];
  return `${randomColor}.${randomShade}`;
};

export const formatPolicyFormValues = (formData) => {
  const fieldsToFormat = Object.keys(addPolicyFormFields).filter(
    (field) =>
      addPolicyFormFields[field].type === INPUT_TYPE_CURRENCY || addPolicyFormFields[field].type === INPUT_TYPE_YEAR
  );
  fieldsToFormat.forEach((field) => (formData[field] = formatFormInt(formData[field])));
};

export const serializeClientForm = (formData) => {
  const fieldsToFormat = addClientFormFields.filter(
    (field) => field.type === INPUT_TYPE_CURRENCY || field.type === INPUT_TYPE_YEAR
  );
  fieldsToFormat.forEach((field) => (formData[field.name] = formatFormInt(formData[field.name])));
};

export const deserializeClient = (formData) => {
  const fieldsToDate = addClientFormFields.filter((field) => field.type === INPUT_TYPE_DATEPICKER);
  fieldsToDate.forEach((field) => {
    const value = formData[field.name];
    formData[field.name] = new Date(value);
  });
  formData.dependants.forEach((dep, index, arr) => {
    arr[index].birthday = new Date(dep.birthday);
  });
};

export const getAge = (birthday) => {
  if (typeof birthday === "string") return differenceInYears(new Date(), new Date(birthday));
  return differenceInYears(new Date(), birthday);
};

export const formatDate = (birthday) => {
  return format(new Date(birthday), "d MMM yyyy");
};
