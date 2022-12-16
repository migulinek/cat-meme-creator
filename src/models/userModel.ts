import { MemeModel } from "./memeModel";

export interface UserModel {
  id: number;
  isLogged: boolean;
  temporaryMeme: MemeModel;
  userMemes: Array<MemeModel>;
}
