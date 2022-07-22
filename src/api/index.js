// Fake API

export const register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cccc');
    }, 1000);
  });
};

export const logOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cccc');
    }, 1000);
  });
};

export const signIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cccc');
    }, 1000);
  });
};
