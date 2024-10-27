'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    console.log({ name, email, message });
    setSuccess(true);
    setError("");

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold text-[#006FFF] mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg border border-gray-300"
      >
        {success && <p className="text-green-500 mb-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <Label htmlFor="name" className="block text-gray-700 mb-2">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#006FFF]"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="block text-gray-700 mb-2">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#006FFF]"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="block text-gray-700 mb-2">Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#006FFF]"
            rows={4}
          ></Textarea>
        </div>
        <Button
          type="submit"
          className="w-full p-3 bg-[#006FFF] text-white font-bold rounded hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
