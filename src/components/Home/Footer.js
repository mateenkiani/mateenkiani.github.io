import SocialIcon from '../../Elements/SocialIcon'
import SvgIcon, { githubIcon, linkedinIcon, stackoverflowIcon, twitterIcon } from '../svg-icon'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="flex flex-col justify-center items-center pt-12 pb-6">
            <ul className="flex items-center" style={{listStyleType: "none"}}>
                <SocialIcon href="https://www.twitter.com/kiani0x01" label="Twitter">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" color='#3c2aff' d={twitterIcon} title="Twitter logo" viewBox="0 0 32 32" />
                </SocialIcon>
                <SocialIcon href="https://www.github.com/mateenkiani" label="GitHub">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" color='black' d={githubIcon} title="GitHub logo" viewBox="0 0 32 32" />
                </SocialIcon>
                <SocialIcon href="https://stackoverflow.com/users/9677399/mateen-kiani" label="Stackoverflow">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" color="orange" d={stackoverflowIcon} title="Stackoverflow logo" viewBox="0 0 32 32" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/mateenkiani" label="LinkedIn">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" color='#3c2aff' d={linkedinIcon} title="LinkedIn logo" viewBox="0 0 32 32" />
                </SocialIcon>
            </ul>
            <p className="text-center text-sm pt-2">Mateen Kiani © {currentYear}</p>
        </footer>
    )
}
