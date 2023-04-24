export const validateCharacters = (password: string) => {
  let regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  return regex.test(password ?? "");
};

export const validateNumbers = (password: string) => {
  if (password.length < 8) return false;
  return true;
};

