const clientSchema = {
  //   annualIncome: 1
  // birthday: Sat Jan 01 2000 00:00:00 GMT+0800 (Singapore Standard Time) {}
  // email: "adf@gmail.com"
  // gender: "male"
  // maritalStatus: "single"
  // mobile: ""
  // name: "asdfas"
  // nationality: "Singapore"
  // occupation: ""
  // salutation: "mr"
  // smoker: "no"
  annualIncome: {
    in: ["body"],
    isInt: true,
  },
  birthday: {
    in: ["body"],
    notEmpty: true,
    // isDate: true,
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
    isIn: { options: ["male", "female", "others"] },
  },
  maritalStatus: {
    in: ["body"],
    notEmpty: true,
    isIn: {
      options: ["single", "divorced", "married", "widowed", "separated"],
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
    isIn: { options: ["mr", "ms", "mrs", "dr"] },
  },
  smoker: {
    in: ["body"],
    notEmpty: true,
    isIn: { options: ["yes", "no"] },
  },
};

module.exports = clientSchema;
