import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Logo from "../components/Logo";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});