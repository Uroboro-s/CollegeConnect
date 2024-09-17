"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "./auth";
import {
  createEvent,
  createUpdate,
  updateProfile,
  uploadImage,
} from "./data_service";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", { redirectTo: "/v1/home" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/v1" });
}

export async function createEventAction(formData) {
  let imgUrl = undefined;
  // console.log(formData.get("image").size);
  if (formData.get("image").size != 0) imgUrl = await uploadImage(formData);

  const newEvent = {
    name: formData.get("name"),
    category: formData.get("category"),
    organized_by: Number(formData.get("club")),
    member_count: Number(formData.get("member_count")),
    reg_cost: Number(formData.get("reg_cost")),
    reg_deadline: formData.get("reg_deadline"),
    reg_link: formData.get("reg_link"),
    start_date: formData.get("start_date"),
    end_date: formData.get("end_date"),
    description: formData.get("description"),
    image: imgUrl,
    banner: undefined,
  };

  // console.log(newEvent);

  const data = await createEvent(newEvent);

  console.log(data);
  redirect(`/v1/events/${data.id}`);
}

// export async function checkEventStatus

export async function createUpdateAction(eventId, formData) {
  // console.log(typeof eventId);
  // console.log(formData);

  const newUpdate = {
    date: formData.get("date"),
    time: formData.get("time"),
    event: Number(eventId),
    message: formData.get("message"),
  };

  const data = await createUpdate(newUpdate);

  revalidatePath(`/v1/events/${eventId}`);
}

export async function updateProfileAction(formData) {
  // console.log(formData);

  const name =
    formData.get("first_name") +
    " " +
    (formData.get("middle_name") === ""
      ? ""
      : formData.get("middle_name") + " ") +
    formData.get("last_name");
  let imgUrl = undefined;

  if (formData.get("image").size != 0) imgUrl = await uploadImage(formData);

  await updateProfile(name, imgUrl && imgUrl, formData.get("user_id"));
}
