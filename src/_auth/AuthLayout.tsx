import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout({ outlet }) {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col flex-1 justify-center items-center py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
}
