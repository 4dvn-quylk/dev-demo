// Fake API

export const signIn = (body) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      delete body.password;
      resolve(body);
    }, 500);
  });
};

export const register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const logOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
