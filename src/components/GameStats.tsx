interface GameStatsProps {
  tempoDecorrido: number;
  jogadas: number;
  combinacoes: number;
  formatTime: (segundos: number) => string;
}

export default function GameStats({ tempoDecorrido, jogadas, combinacoes, formatTime }: GameStatsProps) {
  return (
    <div className="flex justify-center gap-6 text-white text-lg mb-8">
      <div className="bg-white/20 rounded-lg px-4 py-2">
         {formatTime(tempoDecorrido)}
      </div>
      <div className="bg-white/20 rounded-lg px-4 py-2">
         {jogadas} jogadas
      </div>
      <div className="bg-white/20 rounded-lg px-4 py-2">
        {combinacoes}/8 pares
      </div>
    </div>
  );
}