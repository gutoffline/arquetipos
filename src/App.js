import React, {useState} from 'react';

export default function App(){
  const questoes=[
    {
      texto: "Qual seu arquétipo?",
      respostas: [
        { alternativa: "FORTE", categoria: "1"}, 						
        { alternativa: "CORAJOSO", categoria: "1"}, 					
        { alternativa: "CHEIO DE ENERGIA", categoria: "1"}, 			
        { alternativa: "COMPETENTE", categoria: "1"}, 					
        { alternativa: "ENTUSIASMADO", categoria: "1"}, 				
        { alternativa: "DETERMINADO", categoria: "1"}, 				
        { alternativa: "VENCEDOR", categoria: "1"}, 					
        { alternativa: "GUERREIRO", categoria: "1"}, 					
        { alternativa: "EXPRESSIVO NO CORPO E NA VOZ", categoria: "1"},
        { alternativa: "RESILIENTE", categoria: "1"}, 			

        { alternativa: "DEDICADO", categoria: "2"}, 
        { alternativa: "INTELIGENTE", categoria: "2"},
        { alternativa: "RACIONAL", categoria: "2"},
        { alternativa: "BUSCA DA VERDADE", categoria: "2"},
        { alternativa: "GOSTA DE LER", categoria: "2"},
        { alternativa: "CONSELHEIRO", categoria: "2"},
        { alternativa: "ESTUDIOSO", categoria: "2"},
        { alternativa: "PESQUISADOR", categoria: "2"},
        { alternativa: "OBSERVADOR", categoria: "2"},
        { alternativa: "TEM FLUÊNCIA VERBAL", categoria: "2"},

        { alternativa: "ABERTO PARA EXPERIÊNCIAS", categoria:"3"}, 	
        { alternativa: "VERDADEIRO", categoria:"3"}, 					
        { alternativa: "HONESTO", categoria:"3"}, 					
        { alternativa: "CURIOSO", categoria:"3"}, 					
        { alternativa: "PARECE UMA CRIANÇA", categoria:"3"}, 			
        { alternativa: "GOSTA DE AMBIENTES LEVES", categoria:"3"}, 	
        { alternativa: "INGÊNUO", categoria:"3"}, 					
        { alternativa: "IDEALISTA", categoria:"3"}, 					
        { alternativa: "POSITIVO E OTIMISTA", categoria:"3"}, 		
        { alternativa: "NÃO GOSTA DE PROBLEMAS", categoria:"3"}, 		
        
        { alternativa: "EMPÁTICO", categoria:"4"},
        { alternativa: "LEAL", categoria:"4"},
        { alternativa: "TEM COMPAIXÃO", categoria:"4"},
        { alternativa: "GOSTA DE AJUDAR OS OUTROS", categoria:"4"},
        { alternativa: "PRESENTEIA COM FACILIDADE", categoria:"4"},
        { alternativa: "PACIENTE", categoria:"4"},
        { alternativa: "TRANSMITE SEUS CONHECIMENTOS", categoria:"4"},
        { alternativa: "GENEROSO", categoria:"4"},
        { alternativa: "PROTETOR", categoria:"4"},
        { alternativa: "DESEJA UM MUNDO MELHOR", categoria:"4"},

        { alternativa: "SEDUTOR", categoria:"5"}, 					
        { alternativa: "PREOCUPADO COM SUA ESTÉTICA", categoria:"5"}, 
        { alternativa: "SOCIAL", categoria:"5"}, 						
        { alternativa: "SENSORIAL", categoria:"5"}, 					
        { alternativa: "VISÃO ROMANTICA", categoria:"5"}, 			
        { alternativa: "BOÊMIO", categoria:"5"}, 						
        { alternativa: "GOSTA DO LUXO", categoria:"5"}, 				
        { alternativa: "SENSUAL", categoria:"5"}, 					
        { alternativa: "VOZ AVELUDADA", categoria:"5"}, 				
        { alternativa: "BONITO", categoria:"5"}, 			
        
        { alternativa: "JUSTO", categoria: "6"},
        { alternativa: "RESPONSÁVEL", categoria: "6"},
        { alternativa: "DISCRETO", categoria: "6"},
        { alternativa: "TIMIDO", categoria: "6"},
        { alternativa: "DEMOCRATICO", categoria: "6"},
        { alternativa: "ADEQUADO", categoria: "6"},
        { alternativa: "SENSO DE IGUALDADE", categoria: "6"},
        { alternativa: "SIMPLES", categoria: "6"},
        { alternativa: "REALISTA", categoria: "6"},
        { alternativa: "TRABALHADOR", categoria: "6"},        

        { alternativa: "CONTROLADOR", categoria: "7"},                 
        { alternativa: "PERFECCIONISTA", categoria: "7"},              
        { alternativa: "TRADICIONAL", categoria: "7"},                 
        { alternativa: "LIMPO", categoria: "7"},                       
        { alternativa: "GOSTA DE ORDENS E PADRÕES", categoria: "7"},   
        { alternativa: "CRÍTICO", categoria: "7"},                     
        { alternativa: "BUSCA PELA QUALIDADE", categoria: "7"},        
        { alternativa: "RESPONSÁVEL", categoria: "7"},                 
        { alternativa: "AMBICIOSO", categoria: "7"},                   
        { alternativa: "REFINADO", categoria: "7"},  
        
        { alternativa: "BEM HUMORADO", categoria: "8"},
        { alternativa: "IRREVERENTE", categoria: "8"},
        { alternativa: "ORIGINAL", categoria: "8"},
        { alternativa: "ENGRAÇADO", categoria: "8"},
        { alternativa: "LEVE", categoria: "8"},
        { alternativa: "POSTURA DESCONTRAIDA", categoria: "8"},
        { alternativa: "ESPONTÂNEO", categoria: "8"},
        { alternativa: "DESPREOCUPADO", categoria: "8"},
        { alternativa: "ALEGRE", categoria: "8"},
        { alternativa: "TEM GRANDE DISPOSIÇÃO", categoria: "8"},
        
        { alternativa: "INTUITIVO", categoria: "9"},	
        { alternativa: "PODER DE PERCEPÇÃO", categoria: "9"},			
        { alternativa: "SURPREENDENTE", categoria: "9"},
        { alternativa: "PROCURA ENTENDER O UNIVERSO", categoria: "9"},
        { alternativa: "PROMOVE EXPERIÊNCIAS", categoria: "9"},	
        { alternativa: "VISIONÁRIO FALA LINGUAS 		", categoria: "9"},
        { alternativa: "MANIPULADOR", categoria: "9"},				
        { alternativa: "INVENTOR", categoria: "9"},				
        { alternativa: "TRANSFORMADOR PROCURA", categoria: "9"},		
        { alternativa: "INOVADOR", categoria: "9"},				
        
        { alternativa: "LIVRE", categoria: "10"},
        { alternativa: "INDEPENDENTE", categoria: "10"},
        { alternativa: "CURIOSO", categoria: "10"},
        { alternativa: "GOSTA DE MERGULHAR EM CULTURAS", categoria: "10"},
        { alternativa: "AMA VIAJAR", categoria: "10"},
        { alternativa: "DIFERENTES", categoria: "10"},
        { alternativa: "AVENTUREIRO", categoria: "10"},
        { alternativa: "PIONEIRO", categoria: "10"},
        { alternativa: "NOVAS EXPERIÊNCIAS", categoria: "10"},
        { alternativa: "CONECTADO MUNDIALMENTE", categoria: "10"},
        
        { alternativa: "IMAGINATIVO", categoria: "11"}, 			
        { alternativa: "TEM SENSO DE ESTÉTICA", categoria: "11"}, 	
        { alternativa: "GOSTA DE CORES", categoria: "11"}, 			
        { alternativa: "DESAPEGADO DAS IDÉIAS", categoria: "11"}, 	
        { alternativa: "CONTADOR DE HISTÓRIAS", categoria: "11"}, 	
        { alternativa: "EMPREENDEDOR", categoria: "11"}, 			
        { alternativa: "VISIONARIO", categoria: "11"}, 				
        { alternativa: "ARTISTA", categoria: "11"}, 				
        { alternativa: "INVENTIVO ", categoria: "11"},				
        { alternativa: "SONHADOR", categoria: "11"}, 		
        
        { alternativa: "NÃO GOSTA DE PADRÕES		", categoria: "12"},
        { alternativa: "INDIVIDUALISTA", categoria: "12"},
        { alternativa: "DIZ O QUE PENSA", categoria: "12"},
        { alternativa: "REVOLUCIONÁRIO", categoria: "12"},
        { alternativa: "LÍDER", categoria: "12"},
        { alternativa: "OUSADO", categoria: "12"},
        { alternativa: "NÃO ADORA IMAGENS RELIGIOSAS", categoria: "12"},
        { alternativa: "ATIVISTA", categoria: "12"},
        { alternativa: "REFORMADOR", categoria: "12"},
        { alternativa: "NEGATIVO ", categoria: "12"},
      ]
    }
  ];
  

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [mostarPontos, setMostrarPontos] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);
  const [pontos3, setPontos3] = useState(0);
  const [pontos4, setPontos4] = useState(0);
  const [pontos5, setPontos5] = useState(0);
  const [pontos6, setPontos6] = useState(0);
  const [pontos7, setPontos7] = useState(0);
  const [pontos8, setPontos8] = useState(0);
  const [pontos9, setPontos9] = useState(0);
  const [pontos10, setPontos10] = useState(0);
  const [pontos11, setPontos11] = useState(0);
  const [pontos12, setPontos12] = useState(0);
  const [ganhador, setGanhador] = useState(0);

  const handleAlternativaClick = (categoria,e) => {

    if(categoria == "1"){
      if(e.target.checked){
        setPontos1(pontos1 + 1);
      }else{
        setPontos1(pontos1 - 1);
      }
    }else if(categoria == "2"){
      if(e.target.checked){
        setPontos2(pontos2 + 1);
      }else{
        setPontos2(pontos2 - 1);
      }
    }else if(categoria == "3"){
      if(e.target.checked){
        setPontos3(pontos3 + 1);
      }else{
        setPontos3(pontos3 - 1);
      }
    }else if(categoria == "4"){
      if(e.target.checked){
        setPontos4(pontos4 + 1);
      }else{
        setPontos4(pontos4 - 1);
      }
    }else if(categoria == "5"){
      if(e.target.checked){
        setPontos5(pontos5 + 1);
      }else{
        setPontos5(pontos5 - 1);
      }
    }else if(categoria == "6"){
      if(e.target.checked){
        setPontos6(pontos6 + 1);
      }else{
        setPontos6(pontos6 - 1);
      }
    }else if(categoria == "7"){
      if(e.target.checked){
        setPontos7(pontos7 + 1);
      }else{
        setPontos7(pontos7 - 1);
      }
    }else if(categoria == "8"){
      if(e.target.checked){
        setPontos8(pontos8 + 1);
      }else{
        setPontos8(pontos8 - 1);
      }
    }else if(categoria == "9"){
      if(e.target.checked){
        setPontos9(pontos9 + 1);
      }else{
        setPontos9(pontos9 - 1);
      }
    }else if(categoria == "10"){
      if(e.target.checked){
        setPontos10(pontos10 + 1);
      }else{
        setPontos10(pontos10 - 1);
      }
    }else if(categoria == "11"){
      if(e.target.checked){
        setPontos11(pontos11 + 1);
      }else{
        setPontos11(pontos11 - 1);
      }
    }else if(categoria == "12"){
      if(e.target.checked){
        setPontos12(pontos12 + 1);
      }else{
        setPontos12(pontos12 - 1);
      }
    }

    // console.log("A ==> " + pontosA);
    // console.log("B ==> " + pontosB);

    // const proximaQuestao = questaoAtual + 1;
    // if(proximaQuestao < questoes.length){
    //   setQuestaoAtual(proximaQuestao)     ;
    // }else{
    //   setMostrarPontos(true);
    // }
  };

  const handleRespostaClick = (mostrar) => {
    // if(pontosA > pontosB){
    //   setGanhador("A");
    // }else{
    //   setGanhador("B");
    // }
    setMostrarPontos(true);
  };

  return(
    <div className="app">
      {mostarPontos ? (
        <div className="secao-pontos">
              <span>Herói: </span> {pontos1} <br/>
              <span>Sábio: </span> {pontos2} <br/>
              <span>Inocente: </span> {pontos3} <br/>
              <span>Prestativo: </span> {pontos4} <br/>
              <span>Amante: </span> {pontos5} <br/>
              <span>Cara comum: </span> {pontos6} <br/>
              <span>Governante: </span> {pontos7} <br/>
              <span>Bobo da corte: </span> {pontos8} <br/>
              <span>Mágico: </span> {pontos9} <br/>
              <span>Explorador: </span> {pontos10} <br/>
              <span>Criativo: </span> {pontos11} <br/>
              <span>Fora da lei: </span> {pontos12} <br/>
        </div>
      ) : (
        <>
          <div className="secao-questao">
            <div className="numero-questao">
              <span>Selecione as características que mais te descrevem.</span>
            </div>
              {questoes[questaoAtual].respostas.map((resposta) => (
                <p>
                  <label><input type="checkbox" onChange={e => handleAlternativaClick(resposta.categoria , e)} /> {resposta.alternativa}</label>
                </p>
              ))}
              <button onClick={() => handleRespostaClick(true)}> RESULTADO </button>
          </div>            
        </>  
      )}
    </div>
  )
};