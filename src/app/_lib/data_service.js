import { supabase } from "./supabase";
import { isPast } from "date-fns";

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
    throw new Error("User could not be created!");
  }

  return data;
}

export async function getUpcomingEvents() {
  const currentDateInMilliseconds = Date.now();

  let currentDate = new Date(currentDateInMilliseconds).toISOString();
  console.log(currentDate);

  let { data, error } = await supabase
    .from("Event")
    .select("*")
    .gte("start_date", currentDate)
    .order("start_date");

  if (error) {
    console.log(error);
    throw new Error("Upcoming events failed to fetch!");
  }

  return data;
}
