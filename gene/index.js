// 􀀀 auth/index.js
import { login, logout } from "./helpers.js";
export { login, logout };
import User from "./user.js";
export { User };
import Github from "./providers/github.js";
export { Github };

export { default as User } from "./user.js";
export { default as Github } from "./providers/github.js";
export { login, logout } from "./helpers.js";
