import { useRoutes } from "react-router-dom";
import InnerLayout from "./InnerLayout";

import routes from "./Routes";

function InnerSwitch() {
  const routesComponent = useRoutes(routes);

  return <InnerLayout>{routesComponent}</InnerLayout>;
}

export default InnerSwitch;
