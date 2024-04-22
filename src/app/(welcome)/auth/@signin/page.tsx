"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useAuth } from "../../../context/useAuth";
import { useHooks } from "../../../hooks/hooks";
import { handleApiError, signIn } from "../../../api";

import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

export interface LoginPageProps {}

export default function SignInPage({}: LoginPageProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useAuth();
  const { router } = useHooks();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const findUser = await signIn(email, password);
      setUser(findUser);
      router.push("/main");

      setEmail("");
      setPassword("");
    } catch (error) {
      handleApiError(error);
    }
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
