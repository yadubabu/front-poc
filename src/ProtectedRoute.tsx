// import React, { ReactNode } from "react";
// import { useSelector } from "react-redux";
// import { AppState } from "./redux/store";
// import { Route, RouteProps, Redirect } from "react-router-dom";

// interface ProtectedRouteProps {
//   children: ReactNode;
//   path: string;
// }

// const ProtectedRouters: React.FC<ProtectedRouteProps> = ({
//   children,
//   path,
// }) => {
//   const auth = useSelector<AppState>((state) => state.auth);
//   return (
//     <Route
//       path={path}
//       render={({ location }: any) =>
//         auth ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRouters;
