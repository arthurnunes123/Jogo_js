alert("Clique OK para iniciar o jogo");

let vida = 100;
let fisico = 85;
let experiencia = 30;
let inventario = { fisico: 85, vida: 100, foco: 30 };

alert("Bem-vindo à História de Saman.\nSeu inventário atual:\nFisico = 85 Vida = 100 Foco = 30");

alert("Seu objetivo: Classificar para as Olimpíadas.");

alert("Você, Saman, acorda num dia normal após uma longa semana de treino intensivo de canoagem. Você está exausta.");

capitulo1(); // INICIAR JOGO

function capitulo1() {
   let escolha1 = prompt("Você levanta para tomar seu café normalmente e sente que algo está diferente. Ouve barulhos estranhos vindo de fora da sua casa.\n\n1 - Verificar\n2 - Ignorar");
   if (escolha1 == 1) {
       capitulo2(1); // VERIFICAR
   } else if (escolha1 == 2) {
       capitulo2(2); // IGNORAR
   } else {
       alert("Escolha uma opção válida");
       capitulo1();
   }
}

function capitulo2(resposta) {
   if (resposta == 1) {
       // VERIFICAR
       alert("Você se assusta com o tanto de pessoas correndo nas ruas.");
       alert("Você saiu de casa e se deparou com Izaquias Queiros, seu ídolo na canoagem. É um dos dias mais felizes da sua vida.");
       let escolha = prompt("O que você faz?\n1 - Correr até Izaquias e pedir seu autógrafo\n2 - Ignorar seu ídolo");
       if (escolha == 1) {
           capitulo3(1); // CORRER
       } else if (escolha == 2) {
           capitulo3(2); // IGNORAR
       } else {
           alert("Escolha uma opção válida");
           capitulo2(resposta);
       }
   } else if (resposta == 2) {
       // IGNORAR
       alert("O barulho começa a aumentar e você não consegue ignorar. Você abre sua janela e vê muitas pessoas correndo nas ruas.");
       alert("Izaquias Queiros está fugindo da multidão.");
       let escolha = prompt("O que você faz?\n1 - Correr até Izaquias e pedir seu autógrafo\n2 - Ignorar seu ídolo");
       if (escolha == 1) {
           capitulo3(1); // CORRER
       } else if (escolha == 2) {
           alert("Você não vai ao evento e acaba perdendo a oportunidade da sua vida. Terá que treinar mais.");
           alert("Seu país não se classificou na canoagem.");
           alert("Fim de jogo.");
       } else {
           alert("Escolha uma opção válida");
           capitulo2(resposta);
       }
   } else {
       alert("Escolha uma opção válida");
       capitulo1();
   }
}

function capitulo3(resposta) {
   if (resposta == 1) {
       // CORRER
       alert("Você consegue o autógrafo de seu ídolo e conversa com ele.");
       alert("Você se sente inspirada por Izaquias. Você ganhou 25 pontos de experiência.");
       experiencia += 25;
       alert("Sua experiência atual: " + experiencia);
       let escolha2 = prompt("Após conversar com Izaquias, ele comenta sobre um evento para dar mais visibilidade aos atletas de canoagem. Você tem interesse?\n1 - Claro\n2 - Não");
       if (escolha2 == 1) {
           alert("No dia seguinte, você vai ao evento e descobre que sua rival da infância competirá com você.");
           alert("Begona Lazkano, sua rival, que passou a te odiar após ver seus melhores resultados.");
           alert("Você e Begona irão competir nesse evento.");
           corrida();
       } else if (escolha2 == 2) {
           alert("Você decide não participar do evento e continua treinando. Infelizmente, seu país não se classificou.");
           alert("Fim de jogo.");
       } else {
           alert("Escolha uma opção válida");
           capitulo3(resposta);
       }
   } else if (resposta == 2) {
       // IGNORAR
       alert("Você decide ignorar Izaquias e continua com seu dia. Mais tarde, você se arrepende da oportunidade perdida.");
       alert("Seu país não se classificou na canoagem.");
       alert("Fim de jogo.");
   } else {
       alert("Escolha uma opção válida");
       capitulo3(resposta);
   }
}

function corrida() {
   alert("A corrida se inicia! Você começa na liderança!");
   alert("No meio da corrida, Begona alcança você. Faltando 100 metros para o final, ela tenta atacar você com o remo.");
   let escolha3 = prompt("Escolha um número de 1 a 6 para ver se você consegue desviar do ataque de Begona.\n1 2 3 4 5 6");
   let sucesso = Math.random() * 6;
   if (escolha3 == 1 || escolha3 == 2 || escolha3 == 4 || escolha3 == 5 || escolha3 == 6) {
       if (sucesso <= 2) {
           alert("Begona acertou você! Você caiu da sua canoa.");
           alert("Begona passou na sua frente e acabou vencendo a corrida.");
           alert("Fim de jogo. Você não concluiu seu objetivo.");
       } else {
           alert("Você consegue desviar de Begona.");
           alert("Begona cai da sua canoa e acaba desacordada.");
           alert("Você tem a opção de ajudar Begona ou continuar na prova e se classificar para as Olimpíadas.");
           let escolha4 = prompt("1 - Ajudar Begona\n2 - Continuar a prova");
           if (escolha4 == 1) {
               alert("Você para sua canoa e mergulha para ajudar Begona.");
               alert("Você a resgata e salva sua vida.");
               alert("Você continua na prova e garante sua vaga nas Olimpíadas. Parabéns!");
               alert("Fim do jogo.");
           } else if (escolha4 == 2) {
               alert("Você continua remando e se classifica para as Olimpíadas. Parabéns!");
               alert("Fim do jogo.");
           } else {
               alert("Escolha uma opção válida");
               corrida();
           }
       }
   } else {
       alert("Escolha um número válido");
       corrida();
   }
}