"use client";

import React, { useState } from "react";

import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";

export interface SignUpProps {}

export default function SignUp({}: SignUpProps) {
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
      const response = await fetch("http://localhost:3030/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data, "Authentication successful");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          id="name"
          onChange={onChangeName}
          value={name}
          placeholder="Name"
        />
        <Input
          id="email"
          onChange={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <Input
          id="password"
          type="password"
          onChange={onChangePassword}
          value={password}
          placeholder="Password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </section>
  );
}
