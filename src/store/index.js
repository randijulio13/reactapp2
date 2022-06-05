import axios from "axios";
import { selector, atom } from "recoil";

const authUser = selector({
  key: "auth-user",
  get: async () => {
    let user = null;

    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      user = {
        user: data,
      };
    } catch (err) {
      user = {
        user: err.message,
      };
    }

    return user;
  },
});

const theme = atom({
    key: 'switch-theme',
    default: true,
})

export { authUser, theme };
