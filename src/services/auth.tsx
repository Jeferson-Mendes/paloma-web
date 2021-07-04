
interface IUser {
  name: string;
  email: string;
}

interface Response {
  token: string;
  user: IUser;
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
          user: {
            name: 'Jeferson',
            email: 'jeferson@email.com',
          }
        });
      }, 1500);
    });
  }