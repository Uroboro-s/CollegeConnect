import bcrypt from "bcryptjs";

export default async function isSamePassword(password, hashedPassword) {
  // console.log(password);
  // console.log(hashedPassword);
  return bcrypt.compare(password, hashedPassword).then((res) => {
    // console.log(res);
    return res;
  });
}
