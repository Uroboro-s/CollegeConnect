import { supabase } from "./supabase";
import { isPast } from "date-fns";

//Users are uniquely identified by their emails
export async function getUser(email) {
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("email", email)
    .single();

  // console.log(data);
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

  // console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Upcoming events failed to fetch!");
  }

  return data;
}

export async function getPaginatedEvents(currentPage, PAGE_SIZE) {
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let { data, count, error } = await supabase
    .from("Event")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) {
    console.log(error);
    throw new Error("Events couldn't be loaded!");
  }

  return { data, count };
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

export async function getClubs() {
  let { data, error } = await supabase.from("Club").select("name, id");

  if (error) {
    console.log(error);
    throw new Error("Club name failed to fetch!");
  }

  return data;
}

export async function createEvent(newEvent) {
  console.log(newEvent);

  const { data, error } = await supabase
    .from("Event")
    .insert([newEvent])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Event couldn't be created!");
  }

  return data;
}

export async function uploadImage(formData) {
  try {
    const res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
      // headers: {
      //   // add token
      //   // content-type will be auto-handled and set to multipart/form-data
      // },
    });
    const data = await res.json();
    // console.log(data);
    //data is successful!
    // we will return the uploaded image URL from the API to the client
    // console.log(data.imgUrl);
    return data.imgUrl;
  } catch (error) {
    throw new Error("error in uploading image");
  }
}

export async function getRoles(role) {
  const { data, error } = await supabase
    .from("Access")
    .select("user_email")
    .eq("role", role);

  if (error) throw new Error("Roles couldn't be fetched!");

  return data;
}

export async function getUpdates(id) {
  const { data, error } = await supabase
    .from("Update")
    .select("*")
    .eq("event", id);

  if (error) {
    throw new Error("Updates couldn't be fetched!");
  }

  return data;
}

export async function createUpdate(newUpdate) {
  // console.log(newUpdate);

  const { data, error } = await supabase
    .from("Update")
    .insert([newUpdate])
    .select();

  if (error) {
    throw new Error("Couldn't create update!");
  }

  return data;
}

export async function updateProfile(name, image, id) {
  console.log(name + " " + id);

  const { data, error } = await supabase
    .from("User")
    .update({ name: name, image: image })
    .eq("id", id);

  if (error) {
    throw new Error("Couldn't update user profile!");
  }

  return data;
}

export async function getAccount(user_id) {
  const { data, error } = await supabase
    .from("Account")
    .select("*")
    .eq("user", user_id);

  if (error) {
    throw new Error("Couldn't get account!");
  }

  return data;
}
export async function createAccount(account) {
  const { data, error } = await supabase
    .from("Account")
    .insert([account])
    .select();

  if (error) {
    throw new Error("Couldn't create account!");
  }

  return data;
}
export async function updateAccount(user, hashedPassword) {
  const { data, error } = await supabase
    .from("Account")
    .update({ hashedPassword })
    .eq("user", user)
    .select();

  if (error) {
    throw new Error("Couldn't update account!");
  }

  return data;
}
