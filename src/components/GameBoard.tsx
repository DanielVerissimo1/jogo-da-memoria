interface Card {
  id: number;
  valor: string;
  estaVirada: boolean;
  estaCombinada: boolean;
}

interface GameBoardProps {
  cartas: Card[];
  flipCard: (idCarta: number) => void;
}

export default function GameBoard({ cartas, flipCard }: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
      {cartas.map((carta) => {
        return (
          <div
            key={carta.id}
            onClick={() => { flipCard(carta.id); }}
            className={`
              aspect-square rounded-xl cursor-pointer transition-all duration-300 transform
              flex items-center justify-center text-3xl font-bold
              ${carta.estaCombinada 
                ? 'bg-green-400 text-white scale-105 shadow-lg' 

                : carta.estaVirada 
                  ? 'bg-white text-gray-800 shadow-lg'
                  : 'bg-white/30 hover:bg-white/40 hover:scale-105'
              }`}
          >
            {carta.estaVirada || carta.estaCombinada ? carta.valor : '❓'}
          </div>
        );
      })}
    </div>
  );
}