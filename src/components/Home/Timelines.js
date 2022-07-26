import Timeline from '../../Elements/Timeline';
import Title from '../../Elements/Title';
export default function Timelines() {
    const career = [
        {
            date: '2020-04-01',
            dateString: 'April 2020 - Present',
            work: 'Freelance',
            text: "Worked with different clients on React and Javascript based projects. Really helped me to learn new things, improve my skills and get a better understanding of the programming."
        },
        {
            date: '2021-08-01',
            dateString: 'Mar 2021 - Dec 2021',
            work: 'Netlift',
            text: "I joined Netlift as a full stack developer, here I Worked on a Shopify application using node js and next js. Integrated google drive API to manage permissions, read files on the drive, and download them. Write mongoose models, API routes, and handlers."
        },
        {
            date: '2022-04-01',
            dateString: 'Dec 2021 - Present',
            work: 'Reactive Space',
            text: "At reactive space I work with next js, node js, React, and MongoDB. I use mongoose to create data models, write middlewares for API, and handle authentication workflow. I also integrate API's with react and handle logical parts on the front end."
        },
    ]

    return (
        <article className="mt-12">
            <div className="pb-4">
            <h2 className="relative text-2xl font-bold capitalize">
            <div className="absolute -bottom-2 left-0 w-[120px] bg-red-200 border-[3.5px] border-purple-500">
            </div>
            Experience
        </h2>
            </div>
            {
                career.reverse().map((item, index) => {
                    return (
                        <Timeline key={index} date={item.date} dateString={item.dateString} work={item.work}>
                            <p className="w-11/12 text-gray-400">{item.text}</p>
                        </Timeline>
                    )
                })
            }
        </article>
    )
}
