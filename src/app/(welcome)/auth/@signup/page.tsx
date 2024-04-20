"use client";

import { ChangeEvent, FormEvent } from "react";

import { useAuth } from "../../../context/useAuth";
import { useHooks } from "../../../hooks/hooks";

import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

export interface SignUpPageProps {}

export default function SignUpPage({}: SignUpPageProps) {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSignUp,
  } = useAuth();
  const { router } = useHooks();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSignUp(name, email, password);
    router.push("/main");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
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
  );
}
