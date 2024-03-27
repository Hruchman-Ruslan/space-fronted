"use client";

import React, { useState } from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3030/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      console.log(response, "Authentication successful");
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={onChangeName} value={name} />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
