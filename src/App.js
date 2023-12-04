import Usuario from "./telaCadastro/formularios/usuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import store from "./redux/store";
import TelaMenu from "./telaCadastro/telaMenu";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/usuarios" element={<Usuario />} />
            {//<Route path="/mensagems" element={<Mensagem />} />
            }
            <Route path="/" element={<TelaMenu />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer/>
      </div>
  );
}

export default App;
