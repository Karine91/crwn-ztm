import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home/Home.tsx"),
  route("/sign-in", "./routes/sign-in/SignIn.tsx"),
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
