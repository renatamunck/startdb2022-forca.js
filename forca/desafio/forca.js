class Forca {

  constructor(palavraEscolhida){
    this.palavra = palavraEscolhida.split("");
    this.vidas = 6;
    this.arrLetrasChutadas = [];
    this.estadoEsperado = '';
    this.arrPalavra = []
    for(var i = 0; i < this.palavra.length; i++){
      this.arrPalavra.push("_");
    } 
  }

  chutar(letra) {

    
    var letrasValidas = "abcdefghijklmnopqrstuvwxyz";
    if(letra.length != 1){
      return "Chute invalido";
    }else if(letrasValidas.indexOf(letra) == -1){
      return "Chute invalido";
    }else if(this.arrLetrasChutadas.indexOf(letra) > -1){
      return "Chute invalido";
    }

  
    if(this.palavra.indexOf(letra) < 0){
      this.vidas = this.vidas - 1;
      this.arrLetrasChutadas.push(letra);
    }else{
      this.arrLetrasChutadas.push(letra)
      var index = this.palavra.indexOf(letra)
      var indices = [];
      while (index != -1){
        indices.push(index);
        index = this.palavra.indexOf(letra, index + 1);
      }
      for(var i = 0; i < indices.length; i++){
        var lugarLetra = indices[i];
        this.arrPalavra[lugarLetra] = letra;
      }
    }
  }

  buscarEstado() { 
    if(this.vidas == 0){
      return "Poxa,você perdeu!";
    }else if(this.palavra.join('') === this.arrPalavra.join('')){
      return "Você ganhou!";
    }else{
      return "Aguardando chute";
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.arrLetrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.arrPalavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }
  } 
}

module.exports = Forca;

