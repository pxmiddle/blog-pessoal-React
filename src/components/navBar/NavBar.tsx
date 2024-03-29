import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlert } from "../../utils/ToastAlerts";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlert("O Usuário foi desconectado com sucesso!", 'sucesso');
    navigate("/login");
  }

  let component: ReactNode
  
  if(usuario.token !== ""){
    component = (
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4 border-b border-white">
        <div className="container flex justify-between text-lg ">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to='/postagens' className="hover:underline">Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className="hover:underline">Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    {component}
    </>
  );
}

export default Navbar;
