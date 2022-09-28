import RegisterForm from "../components/RegisterForm";

function Signup() {
  return (
    <div className="max-w-screen-xl flex flex-col items-center mx-auto p-3">
      <div className="mt-12 mb-6 ">
        Kayıt olmak için lütfen formu doldurunuz
      </div>

      <RegisterForm />
    </div>
  );
}

export default Signup;
