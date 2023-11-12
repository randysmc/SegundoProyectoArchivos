import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../api/src/config.js";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: 604800, // dias
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
