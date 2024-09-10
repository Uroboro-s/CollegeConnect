"use client";

import { useState } from "react";
import { createEventAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function CreateEventForm({ clubs }) {
  const [fileMessage, setFileMessage] = useState("");

  function changeFile(e) {
    // console.log(e);
    let ext = e.match(/\.([^\.]+)$/)[1];
    // console.log(ext);
    switch (ext) {
      case "jpg":
      case "bmp":
      case "png":
      case "tif":
        setFileMessage("");
        break;
      default:
        setFileMessage("*Invalid file type");
    }
  }
  return (
    <form
      action={createEventAction}
      className="bg-gray-200 py-8 px-12 text-lg flex gap-6 flex-col"
      // encType="multipart/form-data"
    >
      <div className="space-y-2 flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>

      <div className="flex flex-row gap-4">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="category">Choose a category:</label>
          <select
            name="category"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          >
            <option value="Sports">Sport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Learning">Learning</option>
            <option value="Hackathons">Hackathon</option>
            <option value="Workshops">Workshop</option>
            <option value="Games">Game</option>
          </select>
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="club">Which club is organising the event?</label>
          <select
            name="club"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          >
            {clubs.map((club) => {
              return (
                <option key={club.id} value={club.id}>
                  {club.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="member_count">
          Member count(Enter a float number for a range):
        </label>
        <input
          name="member_count"
          type="text"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>
      <div className="flex flex-row gap-4">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="reg_cost">Registration Cost(INR):</label>
          <input
            name="reg_cost"
            type="text"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="reg_deadline">Registration Deadline:</label>
          <input
            name="reg_deadline"
            type="date"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="reg_link">Registration Link:</label>
        <input
          name="reg_link"
          type="text"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>
      <div className="flex flex-row gap-4">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="start_date">Start Date:</label>
          <input
            name="start_date"
            type="date"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="end_date">End Date:</label>
          <input
            name="end_date"
            type="date"
            className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
          />
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm "
        />
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="image">Upload image</label>
        <input
          name="image"
          type="file"
          onChange={(e) => changeFile(e.target.value)}
          accept="image/*"
          className="px-5 py-3 bg-white text-primary-800  shadow-sm rounded-sm"
        />
        <p className="text-xs text-red-600">{fileMessage}</p>
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Create Event</SubmitButton>
      </div>
    </form>
  );
}

export default CreateEventForm;
