import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="max-w-screen-xl flex flex-col items-center mx-auto p-3">
      <div className="mt-12 mb-6 ">Lütfen giriş yapınız</div>
      <LoginForm />
    </div>
  );
}

export default Login;
