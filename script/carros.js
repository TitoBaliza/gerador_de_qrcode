let carros = []

let sectionCarros = document.querySelector('.lista_de_carros')

carros = fetch('carros.json')
    .then(resposta => resposta.json())
    .then(data => data.forEach(produto => {

        let carro = document.createElement('div')
        sectionCarros.appendChild(carro)
        let valorConvertidoEmReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.valor)

        carro.innerHTML =
            `
<div class="container_carros">
                <div class="carro">
                    <div class="container_adicionais_img">
                        <div class="adicionais">
                            <ul class="adicionais_ul">
                                <p class="adicionais_p">Adicionais:</p>
                                <li>Câmbio:${produto.cambio}</li>
                                <li>Banco de Couro: ${produto.banco_de_couro}</li>
                                <li>Ar Condicionado:${produto.Ar_Condicionado}</li>
                                <li>Direção Eletrica:${produto.direcao_eletrica}</li>
                                <li>Financia:${produto.financia}</li>
                                <li>Kilometragem:${produto.quilometragem}</li>
                            </ul>
                        </div>
                        <div class="img_carro_container">
                            <img class="imagem_do_carro" src="${produto.imagem}" alt="camaro">
                        </div>
                    </div>
                    <h2 class="titulo_modelo_carro">${produto.nome}</h2>
                    <ul class="caracteristicas">
                        <p class="caracteristicas_descrição">Descrição:</p>
                        <li>Modelo:${produto.modelo}</li>
                        <li>Cor:${produto.cor}</li>
                        <li>Fabricação:${produto.fabricacao}</li>
                        <li>Valor:${valorConvertidoEmReal}</li>
                    </ul>
                    <div class="btn_Cards">
                    <button>Comprar</button>
                                        
                    <a class="contato"
                    href="https://wa.me/5577991293606?text=Tenho%20interesse%20em%20comprar%20seu%20${"carro "+ produto.nome}${" modelo "+produto.modelo}">
                    <i class="fa-brands fa-whatsapp" ></i>
                   </a>                  
                   </div>
                   </div>
               

            </div>
`

    })
    )

