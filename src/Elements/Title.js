export default function Title({ title = "" }) {
    return (
        <h2 className="relative text-2xl font-bold capitalize">
            <div className="absolute -bottom-2 left-0 w-40 bg-red-200 border-[3.5px] border-purple-500">
            </div>
            {title}
        </h2>
    )
}
