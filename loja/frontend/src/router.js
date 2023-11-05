import {createWebHistory, createRouter} from "vue-router";
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import EditarCliente from "./components/clientes/EditarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import ListarFornecedor from "./components/fornecedores/ListarFornecedor.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCategoria from "./components/categorias/CadastrarCategoria.vue"
import ListarCategoria from "./components/categorias/ListarCategoria.vue"
import CadastrarProduto from "./components/produtos/CadastrarProduto.vue"
import ListarProduto from "./components/produtos/ListarProduto.vue"
import CadastrarCarrinho from "./components/carrinhos/CadastrarCarrinho.vue"
import ListarCarrinhos from "./components/carrinhos/ListarCarrinhos.vue"
import EditarCarrinho from "./components/carrinhos/EditarCarrinho.vue"


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
        path: "/clientes/:id",
        component: EditarCliente,
        props: true
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
        path: "/categorias/cadastrar",
        component: CadastrarCategoria
    },
    {
        path: "/categorias",
        component: ListarCategoria
    },    
    {
        path: "/produtos/cadastrar",
        component: CadastrarProduto
    },
    {
        path: "/produtos",
        component: ListarProduto
    },
    {
        path: "/carrinhos/cadastrar",
        component: CadastrarCarrinho
    },
    {
        path: "/carrinhos",
        component: ListarCarrinhos
    },
    {
        path: "/carrinhos/:id",
        component: EditarCarrinho,
        props: true
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;