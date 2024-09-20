import * as bcrypt from "bcrypt";

export default async function isSamePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword, function (result) {
    return result;
  });
}
