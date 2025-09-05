interface VictoryModalProps {
  gameWon: boolean;
  moves: number;
  timeElapsed: number;
  formatTime: (segundos: number) => string;
  initializeGame: () => void;
}

export default function VictoryModal({ gameWon, moves, timeElapsed, formatTime, initializeGame }: VictoryModalProps) {
  if (!gameWon) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded p-8 text-center max-w-sm mx-4">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Parabéns!
        </h2>
        <p className="text-gray-600 mb-6">
          Você completou o jogo em {moves} jogadas
          e {formatTime(timeElapsed)}!
        </p>
        <button
          onClick={initializeGame}
          className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full
                   hover:bg-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}