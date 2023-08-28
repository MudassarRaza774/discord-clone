const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full first:flex flex-col justify-center items-center ">
    {children}
  </div>
);
export default AuthLayout;
