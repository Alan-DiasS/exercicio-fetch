document.getElementById("botao").addEventListener('click', () => {
    tirarUmaCartaDoBaralho();
})


async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function TirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const resposta= await fetch(url);
    return await resposta.json();
}

async function tirarUmaCartaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await TirarUmaCarta(baralho.deck_id);
    const imagemDaCarta = carta.cards[0].image;
    document.getElementById("carta").src = imagemDaCarta;
}

tirarUmaCartaDoBaralho();