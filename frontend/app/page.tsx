import { redirect } from "next/navigation";

/**
 * Root page — redirects authenticated users to /properties,
 * and unauthenticated users to /login.
 * The actual auth check is done in the dashboard layout.
 */
export default function RootPage() {
  redirect("/login");
}
