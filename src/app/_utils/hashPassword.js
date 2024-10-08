import bcrypt from "bcryptjs";

export default async function hashPassword(password) {
  return bcrypt.hash(password, 10).then(function (hash) {
    return hash;
  });
}
