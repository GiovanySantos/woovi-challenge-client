export const validateCharacters = (password: string) => {
  let regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  return regex.test(password);
};

export const validateNumbers = (password: string) => {
  if (password.length < 8) return false;
  return true;
};

export const validateEmail = (email: string) => {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

