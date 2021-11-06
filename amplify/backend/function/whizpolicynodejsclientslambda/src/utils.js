const { differenceInYears } = require("date-fns");

const calculateAge = (birthday) => {
  console.log(differenceInYears(new Date(), new Date(birthday)));
  return differenceInYears(new Date(), new Date(birthday));
};

module.exports.calculateAge = calculateAge;
