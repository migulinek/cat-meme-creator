export default {
  async sendLogin(login: string | undefined): Promise<boolean> {
    const response: boolean = await new Promise((res, rej) => {
      checkUsername(login) ? res(true) : rej(false);
    });
    return response;
  },
  async sendLogout(id: number): Promise<boolean> {
    // Fake logout on the server
    return await new Promise((res, rej) => res(false));
  },
};

const checkUsername = (username: string | undefined) =>
  username && username.length >= 5 ? true : false;
