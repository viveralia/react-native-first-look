export const getRandomUserId = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const getInitials = (name: string | undefined): string => {
  if (!name) return "";
  const initials = name.charAt(0) + name.charAt(2);
  return initials.toUpperCase();
};
