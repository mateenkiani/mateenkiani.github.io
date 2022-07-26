const achievements = [
  "Arctic Code vault contributor - Github",
  "38 badges and 2.2k score - Stackoverflow",
  "Level 1 seller - fiverr",
  "Best programmer award - Air University",
];

export default function Achievements() {
  return (
    <div className="mt-16">
      <h2 className="relative text-2xl font-bold capitalize mb-[10px]">
        <div className="absolute -bottom-2 left-0 w-[153px] bg-red-200 border-[3.5px] border-purple-500"></div>
        Achievements
      </h2>
      <div className="flex flex-col py-2">
        {achievements.map((item) => (
          <div className="flex items-center py-2">
            <span className="border-2 rounded-full bg-purple-500 w-4 h-4 mr-2"></span>
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
