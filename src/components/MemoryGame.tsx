'use client';
import { useState, useEffect } from 'react';
import GameStats from './GameStats';
import GameBoard from './GameBoard';
import RestartButton from './RestartButton';
import VictoryModal from './VictoryModal';

interface Card {
  id: number;
  valor: string;
  estaVirada: boolean;
  estaCombinada: boolean;
}

const SIMBOLOS_CARTAS = ['🏋 ', '🚀', '📈', '🎵', '🗿', '🌴', '🔥', '⚽ '];

export default function MemoryGame() {
  const [cartas, setCartas] = useState<Card[]>([]);
  const [cartasViradas, setCartasViradas] = useState<number[]>([]);
  const [jogadas, setJogadas] = useState(0);
  const [combinacoes, setCombinacoes] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [jogoVencido, setJogoVencido] = useState(false);

  const iniciarJogo = () => {
    // Criar pares de cartas
    const paresCartas = SIMBOLOS_CARTAS.flatMap((simbolo, index) => [
      { id: index * 2, valor: simbolo, estaVirada: false, estaCombinada: false },
      { id: index * 2 + 1, valor: simbolo, estaVirada: false, estaCombinada: false }
    ]);
    
    // Embaralhar cartas
    const cartasEmbaralhadas = [...paresCartas].sort(() => Math.random() - 0.5);  
    
    setCartas(cartasEmbaralhadas);
    setCartasViradas([]);
    setJogadas(0);
    setCombinacoes(0);
    setTempo(0);
    setJogoVencido(false);
  };

  // quando o timer começa
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (jogadas > 0 && combinacoes < 8) {
        setTempo(tempo + 1);
      } 
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tempo, jogadas, combinacoes]);

  // verificar vitória
  useEffect(() => {
    if (combinacoes === 8) {
      setJogoVencido(true);
    }
  }, [combinacoes]);

  // renderiza os cards quando abre o site
  useEffect(() => {
    iniciarJogo();
  }, []);


  const virarCarta = (idCarta: number) => {
    // Naao fazer nada se ja ha 2 cartas virada ou se a carta ja ta virada/combinada impedi
    if (cartasViradas.length === 2) return;
    
    // Impedir clicar no mesmo card duas vezes
    if (cartasViradas.includes(idCarta)) return;

    // virar a carta
    const novasCartas = cartas.map(carta => 
      carta.id === idCarta ? { ...carta, estaVirada: true } : carta
    );
    
    setCartas(novasCartas);
    
    const novasCartasViradas = [...cartasViradas, idCarta];
    setCartasViradas(novasCartasViradas);

    // se 2 cartas foram viradas, verificar combinação
    if (novasCartasViradas.length === 2) {
      setJogadas(jogadas + 1);
      
      const [primeiroId, segundoId] = novasCartasViradas;
      const primeiraCarta = cartas.find(c => c.id === primeiroId);
      const segundaCarta = cartas.find(c => c.id === segundoId);

      if (primeiraCarta && segundaCarta && primeiraCarta.valor === segundaCarta.valor) {
        // combinaçao encontrada
        setTimeout(() => {
          setCartas(cartas.map(carta => 
            (carta.id === primeiroId || carta.id === segundoId) 
              ? { ...carta, estaCombinada: true }
              : carta
          ));
          setCombinacoes(combinacoes + 1);
          setCartasViradas([]);
        }, 500);
      } else {
        // nao é combinação - virar cartas de volta
        setTimeout(() => {
          setCartas(cartas.map(carta => 
            (carta.id === primeiroId || carta.id === segundoId) 
              ? { ...carta, estaVirada: false }
              : carta
          ));
          setCartasViradas([]);
        }, 1000);
      }
    }
  };

  // tempo do cromometro
  const formatarTempo = (segundos: number) => {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#4444] p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Jogo da Memória
          </h1>
        </div>
        
        <GameStats 
          tempoDecorrido={tempo} 
          jogadas={jogadas} 
          combinacoes={combinacoes} 
          formatTime={formatarTempo}
        />

        <GameBoard cartas={cartas} flipCard={virarCarta} />

        <RestartButton initializeGame={iniciarJogo} />

        <VictoryModal 
          gameWon={jogoVencido} 
          moves={jogadas} 
          timeElapsed={tempo} 
          formatTime={formatarTempo} 
          initializeGame={iniciarJogo} 
        />
      </div>
    </div>
  );
}