export default function SocialIcon({ children, href, label }) {
    return (
        <li className="p-4">
            <a
                href={href}
                className="flex text-gray-800 focus-outline hover:text-neon-blue"
                label={label}
            >
                {children}
            </a>
        </li>
    )
}
