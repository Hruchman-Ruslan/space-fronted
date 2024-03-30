"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";

export interface PageProps {}

export default function Page({}: PageProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3030/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data, "Authorization successful");

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
          id="email"
          placeholder="Email"
          onChange={onChangeEmail}
          value={email}
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </section>
  );
}
