import Title from "../../Elements/Title";

export default function Contact() {
  return (
    <div className="mt-12">
      <h2 className="relative text-2xl font-bold capitalize">
        <div className="absolute -bottom-2 left-0 w-[85px] bg-red-200 border-[3.5px] border-purple-500"></div>
        Contact
      </h2>
      <h4 className="pt-8 w-11/12">
        If you want to reach out please drop me an{" "}
        <span>
          <a
            href="mailto:kiani.mateen012@gmail.com"
            className="text-purple-500 hover:underline"
          >
            Email
          </a>
        </span>
        . You can also check out my social media presence following the links
        below.
      </h4>
    </div>
  );
}
