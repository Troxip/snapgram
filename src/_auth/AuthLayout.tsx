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

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="xl:block hidden bg-no-repeat w-1/2 h-screen object-cover"
          />
        </>
      )}
    </>
  );
}
