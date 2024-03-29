"use client";
import { client } from "@/config/client";
import Image from "next/image";
const { CALLBACK_URL } = process.env;
export const Google = () => {
  const login = async () => {
    const { response, data } = await client.get("/auth/google");

    const {
      result: { urlRedirect },
    } = data;
    if (!data) {
      return;
    }
    window.location.href = urlRedirect;
  };
  return (
    <button onClick={login}>
      <Image
        src="https://didongviet.vn/icon/login/googleicon.png"
        alt="google"
        width={30}
        height={30}
      />
    </button>
  );
};
