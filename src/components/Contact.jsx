import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0778f23f-ae76-4689-ae67-e6d70d6528fa"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Submit the form below or shoot me an email: timarleyf@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-white hover:text-[#0a192f] px-4 py-3 my-8 mx-auto  ">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
