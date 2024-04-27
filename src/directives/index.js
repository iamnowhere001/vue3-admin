import formatter from "./formatter";
import permission from "./permission";
import flag from "./flag";

export default function createDirectives(app) {
  app.directive("fmt", formatter);
  app.directive("per", permission);
  app.directive("flag", flag);
}
