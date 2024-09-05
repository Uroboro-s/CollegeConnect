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

export async function getUpcomingEvents(category) {
  let currentDate = new Date(Date.now()).toISOString();

  let { data, error } = await supabase
    .from("Event")
    .select("name, image, id")
    .eq("category", category)
    // .gte("start_date", currentDate) //enable this for actual use
    .order("start_date");

  // console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Upcoming events failed to fetch!");
  }

  return data;
}

//is registrable really a word???
export async function getRegistrableEvents() {
  let currentDate = new Date(Date.now()).toISOString();
  // console.log(currentDate);

  let { data, error } = await supabase
    .from("Event")
    .select("name, image, id")
    .gte("reg_deadline", currentDate)
    .order("reg_deadline");

  // console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Upcoming events failed to fetch!");
  }

  return data;
}

export async function getEvent(id) {
  let { data, error } = await supabase
    .from("Event")
    .select("*, description")
    .eq("id", id)
    .single();

  console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Upcoming events failed to fetch!");
  }

  return data;
}

export async function getBannerName(id) {
  console.log(id);
  let { data, error } = await supabase
    .from("Banner")
    .select("name")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Banner name failed to fetch!");
  }

  return data;
}

export async function getClub(id) {
  let { data, error } = await supabase
    .from("Club")
    .select("name")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Club name failed to fetch!");
  }

  return { clubName: data.name };
}
