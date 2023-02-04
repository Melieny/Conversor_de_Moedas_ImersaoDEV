function converterDolar(){
  let dolar = 30;
  let real = 5.15

  const botaoValorDOLAR = document.querySelector('.converter-dolar')
  const convertendoDOLAR = (dolar * real).toFixed(2)


    const botaoConversorDOLAR = document.querySelector('.botao-conversorDolar')
          botaoConversorDOLAR.addEventListener('click',(() => {
          botaoValorDOLAR.value = convertendoDOLAR
    }))

}

function converterEuro(){
  let euro = 30;
  let real = 5.58;

  let convertendoEURO = (euro * real).toFixed(2);
  
  const botaoValorEURO = document.querySelector('.converter-euro')

  const botaoConversorEURO = document.querySelector('.botao-conversorEuro');
     botaoConversorEURO.addEventListener('click',(() => {
        botaoValorEURO.value = convertendoEURO
  }))
}

function ConversorBitcoin (){

  let bitcoiDolar = 0.000043;
  let bitcoiEuro = 0.000046;

  let dolarr =  30
  let euroo =  60

 

  const ConversorBitcoinEuro = (bitcoiEuro * euroo).toFixed(4)
  const ConversorBitcoinDolar = (bitcoiDolar *dolarr).toFixed(4)

      const botaoValorDOLARbitcoin = document.querySelector('.botao-conversorDolar');
      const botaoValorEURObitcoin = document.querySelector('.botao-conversorEuro');

      const DolarBitcoin = document.querySelector('.converter-dolar')
      const EuroBitcoin = document.querySelector('.converter-euro')
      const TextoConversor = document.querySelector('.page-title');
      const tituloPagina = document.querySelector('.titulo-pagina');
      const botaoBitcoin = document.querySelector('.bitcoin-conversor');
      const imagemBITCOIN = document.querySelector('.body-conversor');
      const input = document.getElementById('input');


        botaoBitcoin.addEventListener ('click',(() => {

          if(botaoBitcoin.value == 'Bitcoin') {
              
            tituloPagina.innerHTML = 'Conversor BitCoin'
            TextoConversor.innerHTML = 'Conversor Bitcoin'
            imagemBITCOIN.classList.add('background-bitcoin')
            input.remove();
            botaoValorDOLARbitcoin.value = 'Converter DOLAR em BITCOIN'
            botaoValorEURObitcoin.value = 'Converter EURO em BITCOIN'

          } else {
             return window.location.reload(true)
            
          }
          
        }
      )
    )

    botaoValorDOLARbitcoin.addEventListener('click',(() => {
      if(botaoValorDOLARbitcoin.value ==  'Converter DOLAR em BITCOIN'){
          return DolarBitcoin.value = ConversorBitcoinDolar;

        }
      }
    )
  )
   botaoValorEURObitcoin.addEventListener('click',(() => {
    if(botaoValorEURObitcoin.value ==  'Converter EURO em BITCOIN'){
        return EuroBitcoin.value = ConversorBitcoinEuro;
}

}))
}


function resetarPagina(){
    const resetar = document.querySelector('.reset-conversor');
    resetar.addEventListener('click',(() => {
      if(resetar.value == "Resetar"){
        return window.location.reload(true)
      }
    }))
}







converterDolar();
converterEuro();
ConversorBitcoin();
resetarPagina();