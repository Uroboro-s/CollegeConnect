import { supabase } from "./supabase";

//Users are uniquely identified by their emails
export async function getUser(email) {
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("email", email)
    .single();

  //no error here, we handle the possibilty of error in sign-in callback
  return data;
}

export async function createUser(name, email, image) {
  const registrationNumber = name.split(" ").pop().toUpperCase();
  const fullName = name.split(" ").slice(0, -1).join(" ").toUpperCase();
  const newUser = {
    name: fullName,
    email: email,
    reg_no: registrationNumber,
    image: image,
  };
  console.log(newUser);

  const { data, error } = await supabase.from("User").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}

export async function getEvents() {
  let { data, error } = await supabase.from("Event").select("*");

  return data;
}
