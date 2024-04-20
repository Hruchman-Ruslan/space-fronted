export const handleApiError = (error: any) => {
  console.error("Network error:", error);
  throw error;
};

export const callApi = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    handleApiError(error);
  }
};

export const signUp = async (name: string, email: string, password: string) => {
  const response = await callApi("http://localhost:3030/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  return response;
};

export const signIn = async (email: string, password: string) => {
  const response = await callApi("http://localhost:3030/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log(response);
  return response;
};
