"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useAuth } from "../../../context/useAuth";
import { useHooks } from "../../../hooks/hooks";
import { handleApiError, signUp } from "../../../api";

import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

export interface SignUpPageProps {}

export default function SignUpPage({}: SignUpPageProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useAuth();
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const createUser = await signUp(name, email, password);
      setUser(createUser);
      router.push("/main");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      handleApiError(error);
    }
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
