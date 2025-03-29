import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home/Home.tsx"),
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
