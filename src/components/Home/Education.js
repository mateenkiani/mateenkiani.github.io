import Timeline from "../../Elements/Timeline";

export default function Education() {
  const career = [
    {
      date: "2020-04-01",
      dateString: "April 2015 - 2017",
      work: "Intermediate/FSC",
      text: "I did my intermediate from fauji foundation college in Pre-Engineering.",
    },
    {
      date: "2021-08-01",
      dateString: "July 2017 - Aug 2021",
      work: "Bachelor of Science in Computer Science",
      text: "I did my bachelor of science in computer science from Air University Islamabad.",
    },
  ];

  return (
    <article className="mt-12">
      <div className="pb-4">
        <h2 className="relative text-2xl font-bold capitalize">
          <div className="absolute -bottom-2 left-0 w-[120px] bg-red-200 border-[3.5px] border-purple-500"></div>
          Education
        </h2>
      </div>
      {career.reverse().map((item, index) => {
        return (
          <Timeline
            key={index}
            date={item.date}
            dateString={item.dateString}
            work={item.work}
          >
            <p className="w-11/12 text-gray-400">{item.text}</p>
          </Timeline>
        );
      })}
    </article>
  );
}
