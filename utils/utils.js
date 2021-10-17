export const getInitials = (name) => {
  const words = name.split(" ");

  return words[0].charAt(0) + words[1].charAt(0);
};
