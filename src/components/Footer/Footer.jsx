import youtubeIcon from "../../assets/youtube_icon.png"
import twitterIcon from "../../assets/twitter_icon.png"
import instagramIcon from "../../assets/instagram_icon.png"
import facebookIcon from "../../assets/facebook_icon.png"
function Footer() {
    return (  

        <div className=" py-[30px] px-3 sm:px-10 max-w-[1000px] mx-auto">
            <div className="flex gap-[20px] my-[40px] ">
                <img className="w-10 h-10 cursor-pointer" src={facebookIcon} alt="" />
                <img className="w-10 h-10 cursor-pointer" src={instagramIcon} alt="" />
                <img className="w-10 h-10 cursor-pointer" src={twitterIcon} alt="" />
                <img className="w-10 h-10 cursor-pointer" src={youtubeIcon} alt="" />
            </div>
            <ul className="grid grid-cols-4 gap-[15px] sm:text-[16px] text-[12px] mb-10">
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Centre</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className="text-gray-400 text-sm">© 1997-2023 Netflix, Inc.</p>
        </div>
    );
}

export default Footer;