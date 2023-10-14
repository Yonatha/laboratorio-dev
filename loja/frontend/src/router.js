import {createWebHistory, createRouter} from "vue-router";
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import ListarFornecedor from "./components/fornecedores/ListarFornecedor.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCategoria from "./components/categorias/CadastrarCategoria.vue"

const routes = [
    {
        path: "/clientes",
        component: ListarCliente
    },
    {
        path: "/clientes/cadastrar",
        component: CadastrarCliente
    },
    {
        path: "/fornecedores",
        component: ListarFornecedor
    },    
    {
        path: "/fornecedores/cadastrar",
        component: CadastrarFornecedor
    },
    {
        path: "/categorias",
        component: CadastrarCategoria
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;