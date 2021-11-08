export const formatPrice = (amount) => {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  return `$${amount.toString().replace(exp, rep)}`;
};
