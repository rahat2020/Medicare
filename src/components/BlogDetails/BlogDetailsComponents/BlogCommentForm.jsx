"use client";
import React, { useState } from "react";

const BlogCommentForm = () => {
  const [form, setForm] = useState({ name: "", email: "", comment: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add your form submission logic here
    setForm({ name: "", email: "", comment: "" });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Leave A Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={form.name}
            onChange={handleChange}
            className="w-1/2 p-3 border bg-gray-100 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={form.email}
            onChange={handleChange}
            className="w-1/2 p-3 border bg-gray-100 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="comment"
          placeholder="Write A Comment..."
          value={form.comment}
          onChange={handleChange}
          className="w-full p-3 border bg-gray-100 placeholder:text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-1/4 rounded-full bg-blue-500 text-white py-3 hover:bg-blue-600 transition"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default BlogCommentForm;
