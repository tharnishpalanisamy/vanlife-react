import { redirect } from "react-router-dom";

export function requireAuth() {
  console.log("🔥 REQUIRE AUTH TOKEN:", localStorage.getItem("token"));

  const token = localStorage.getItem("token");

  if (!token) {
    throw redirect("/login?message=you must login first");
  }
}