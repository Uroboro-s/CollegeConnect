"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/v1/home" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/v1" });
}

export async function createEvent(formData) {
  console.log(formData);

  // try {
  //   const res = await fetch("http://localhost:3000/api/upload", {
  //     method: "POST",
  //     body: formData,
  //     // headers: {
  //     //   // add token
  //     //   // content-type will be auto-handled and set to multipart/form-data
  //     // },
  //   });
  //   // console.log(res);
  //   const data = await res.json();
  //   console.log(data);
  //   //data is successful!
  //   // // we will return the uploaded image URL from the API to the client
  //   // console.log(data.imgUrl);
  // } catch (error) {
  //   // console.log(error);
  //   throw new Error("error in actions.js");
  // }
}
