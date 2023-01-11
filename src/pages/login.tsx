const Login: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border rounded-md w-96 h-96 m-auto p-5">
        <div className="flex flex-col justify-center pt-20">
          <label htmlFor="">Email</label>
          <input className="border h-9 mb-2 rounded p-2" type="email" />
          <label htmlFor="">Senha</label>
          <input className="border h-9 rounded p-2" type="text" />
          <button className="mt-4 border-solid bg-sky-600 text-white font-bold p-2 rounded hover:bg-sky-500 ease-linear duration-200">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
