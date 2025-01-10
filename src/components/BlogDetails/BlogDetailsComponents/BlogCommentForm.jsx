"use client";

import AppButton from "@/UI/AppButton";
import { checkEmailForValid } from "@/utils/appHelpers";
import React, { useState } from "react";

const BlogCommentForm = () => {
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate email if the field being changed is 'email'
    if (name === "email") {
      if (!checkEmailForValid(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError(""); // Clear the error if valid
      }
    }

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkEmailForValid(form.email)) {
      setEmailError("Invalid email address");
      return; // Prevent form submission if the email is invalid
    }

    setForm({ name: "", email: "", comment: "" });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="flex-1 min-w-[240px] p-3 border bg-gray-50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex-1 min-w-[240px]">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`p-3 border ${
                emailError ? "border-red-500" : "bg-gray-50"
              } placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
        </div>

        <textarea
          name="comment"
          placeholder="Write your comment here..."
          value={form.comment}
          onChange={handleChange}
          className="w-full p-3 border bg-gray-50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
        <AppButton
          withoutHrefBtn={true}
          type="submit"
          text="Submit Now"
          customStyles={
            "w-full md:w-1/3 rounded-full bg-blue-500 text-white py-3 font-semibold hover:bg-blue-600 transition-all duration-300"
          }
        />
      </form>
    </div>
  );
};

export default BlogCommentForm;

// "use client";

// import React, { useState } from "react";

// const BlogCommentForm = () => {
//   const [form, setForm] = useState({ name: "", email: "", comment: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//     setForm({ name: "", email: "", comment: "" });
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-800">Leave a Comment</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="flex flex-wrap gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="flex-1 min-w-[240px] p-3 border bg-gray-50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="flex-1 min-w-[240px] p-3 border bg-gray-50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <textarea
//           name="comment"
//           placeholder="Write your comment here..."
//           value={form.comment}
//           onChange={handleChange}
//           className="w-full p-3 border bg-gray-50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="5"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full md:w-1/3 rounded-full bg-blue-500 text-white py-3 font-semibold hover:bg-blue-600 transition-all duration-300"
//         >
//           Submit Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BlogCommentForm;
