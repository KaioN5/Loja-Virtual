const produto1 = {
    id: 1,
    nome: "Casaco Branco",
    marca: "Zara",
    preco: 70,
    nomeArquivoImagem: "product-1.jpg",
};
const produto2 = {
    id: 2,
    nome: "Sobretudo Azul Marinho",
    marca: "Zara",
    preco: 110,
    nomeArquivoImagem: "product-2.jpg",
};

const catalogo = [
    {
        id: 1,
        marca: "Zara",
        nome: "Camiseta larga com Bolsos",
        preco: 70,
        imagem: "product-1.jpg",
        feminino: False,
    },
        {
        id: 2,
        marca: "Zara",
        nome: "Casaco Reto com Lã",
        preco: 85,
        imagem: "product-2.jpg",
        feminino: True,
    },
        {
        id: 3,
        marca: "Zara",
        nome: "Jaqueta com Efeito Camurça",
        preco: 60,
        imagem: "product-3.jpg",
        feminino: False,
    },
        {
        id: 4,
        marca: "Zara",
        nome: "Sobretudo com Mescla de Lã",
        preco: 160,
        imagem: "product-4.jpg",
        feminino: False,
    },
        {
        id: 5,
        marca: "Zara",
        nome: "Camiseta larga acolchoada de veludo Cotelê",
        preco: 110,
        imagem: "product-5.jpg",
        feminino: False,
    },
        {
        id: 6,
        marca: "Zara",
        nome: "Camiseta Lã com Botões",
        preco: 170,
        imagem: "product-6.jpg",
        feminino: True,
    },
        {
        id: 7,
        marca: "Zara",
        nome: "Casaco Com Botões",
        preco: 75,
        imagem: "product-7.jpg",
        feminino: True,
    },
        {
        id: 8,
        marca: "Zara",
        nome: "Colete comprido com Cinto",
        preco: 70,
        imagem: "product-8.jpg",
        feminino: False,
    },
];

for (const produtoCatalogo of catalogo) {

    const cartaoProduto = <div class ="border-t-4 border-indigo-500 w-48 m-2" id="cartao-produto-${produtoCatalogo.id}">
<img
  src="./assets/img/${produtoCatalogo.imagem}"
  alt="Produto 1 do Magazine Luiza Hashtag."
  style="height: 300px;"
/>
<p class="marca">$${produtoCatalogo.marca}</p>
<p>$${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>;

document.getElementById("container-produtos").innerHTML += cartaoProduto;

}