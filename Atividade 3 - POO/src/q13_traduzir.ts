class TradutorEmojis{
    dicionario: { [palavra: string]: string } = {
    "amor": "❤️",
    "futebol": "⚽",
    "cachorro": "🐶",}

    traduzir(frase: string): string{
        let lista: string[] = frase.split(' ');

        for (let i = 0; i <= lista.length; i++ ){
            if (lista[i] in this.dicionario){
                lista[i] = this.dicionario[lista[i]];
            }
        }

        return lista.join(" ");
    }
}


let traducao1 = new TradutorEmojis();


console.log(traducao1.traduzir('O amor do brasileiro é o futebol e o cachorro'));