const VALUE_NOT_IN_OPTIONS_MESSAGE = "The value provided is not permissible";
const INVALID_DATE_MESSAGE = "The value provided is not a valid date";
const clientSchema = {
  annualIncome: {
    in: ["body"],
    isInt: true,
    toInt: true,
  },
  birthday: {
    in: ["body"],
    notEmpty: true,
  },
  email: {
    in: ["body"],
    trim: true,
    isEmail: true,
    notEmpty: true,
  },
  gender: {
    in: ["body"],
    notEmpty: true,
    isIn: { options: [["male", "female", "others"]] },
    errorMessage: VALUE_NOT_IN_OPTIONS_MESSAGE,
  },
  maritalStatus: {
    in: ["body"],
    notEmpty: true,
    isIn: {
      options: [["single", "divorced", "married", "widowed", "separated"]],
      errorMessage: VALUE_NOT_IN_OPTIONS_MESSAGE,
    },
  },
  mobile: {
    in: ["body"],
    trim: true,
  },
  name: {
    in: ["body"],
    trim: true,
    notEmpty: true,
  },
  nationality: {
    in: ["body"],
    notEmpty: true,
  },
  occupation: {
    in: ["body"],
    trim: true,
  },
  salutation: {
    in: ["body"],
    notEmpty: true,
    isIn: {
      options: [["mr", "ms", "mrs", "dr"]],
      errorMessage: VALUE_NOT_IN_OPTIONS_MESSAGE,
    },
  },
  smoker: {
    in: ["body"],
    isIn: {
      options: [["yes", "no"]],
      errorMessage: VALUE_NOT_IN_OPTIONS_MESSAGE,
    },
  },
};

module.exports = clientSchema;
