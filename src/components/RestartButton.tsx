interface RestartButtonProps {
  initializeGame: () => void;
}

export default function RestartButton({ initializeGame }: RestartButtonProps) {
  return (
    <div className="text-center mb-6">
      <button
        onClick={initializeGame}
        className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full 
                 hover:bg-purple-100 transition-color duration-200 shadow-lg 
                 transform hover:scale-100 active:scale-95 cursor-pointer"
      >
        Novo Jogo
      </button>
    </div>
  );
}