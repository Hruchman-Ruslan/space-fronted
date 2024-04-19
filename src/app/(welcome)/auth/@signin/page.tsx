"use client";

import { ChangeEvent, FormEvent } from "react";

import { useAuth } from "../../../context/useAuth";

import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

export interface SignInPageProps {}

export default function SignInPage({}: SignInPageProps) {
  const { email, password, setEmail, setPassword, handleSignIn } = useAuth();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSignIn(email, password);

    setEmail("");
    setPassword("");
  };

  return (
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
  );
}
