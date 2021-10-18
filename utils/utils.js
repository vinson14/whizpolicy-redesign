export const getInitials = (name) => {
  const words = name.split(" ");

  return words[0].charAt(0) + words[1].charAt(0);
};

export const findClientById = (clients, id) => {
  return clients.find((client) => client.id == id);
};

export default function formatNumber(num, decPlaces = 0) {
  if (!num) return " - ";
  return num.toFixed(decPlaces).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
