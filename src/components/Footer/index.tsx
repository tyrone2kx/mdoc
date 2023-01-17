import mdoc from "assets/images/mdoc-logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
  YoutubeIcon,
} from "assets/icons";

const Footer = () => {
  return (
    <footer className="bg-darkBlue p-[40px] lg:p-[100px]">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:mx-2">
            <img src={mdoc} alt="logo" />

            <p className="text-white mt-8">
              1a Hakeem Dickson Drive, <br />
              Off T.F. Kuboye Street, <br />
              Lekki Phase 1, Lagos
            </p>
            <br />
            <p className="text-white">+2348178348579</p>
            <p className="text-white">info@mymdoc.com</p>
          </div>

          <div className="mb-8 md:mb-0 md:mx-2">
            <h3 className="text-white uppercase font-bold">OUR APPROACH</h3>

            <p className="text-white mt-4 font-thin">Businesses</p>
            <p className="text-white mt-4 font-thin">Individuals</p>
            <p className="text-white mt-4 font-thin">Testimonials</p>
            <p className="text-white mt-4 font-thin">Outcomes</p>
          </div>

          <div className="mb-8 md:mb-0 md:mx-2">
            <h3 className="text-white uppercase font-bold">Programs</h3>

            <p className="text-white mt-4 font-thin">Diabetes</p>
            <p className="text-white mt-4 font-thin">Pre Diabetes & Weight loss</p>
            <p className="text-white mt-4 font-thin">Hypertension</p>
            <p className="text-white mt-4 font-thin">Cancer</p>
            <p className="text-white mt-4 font-thin">Behavioral Health</p>
          </div>

          <div className="mb-8 md:mb-0 md:mx-2">
            <h3 className="text-white uppercase font-bold">Company</h3>

            <p className="text-white mt-4 font-thin">About</p>
            <p className="text-white mt-4 font-thin">Careers</p>
            <p className="text-white mt-4 font-thin">Blog</p>
            <p className="text-white mt-4 font-thin">Resources</p>
            <p className="text-white mt-4 font-thin">Contact Us</p>
            <p className="text-white mt-4 font-thin">Press</p>
          </div>

          <div className="mb-8 md:mb-0 md:mx-2">
            <h3 className="text-white uppercase font-bold">Legal</h3>

            <p className="text-white mt-4 font-thin">Privacy policy</p>
            <p className="text-white mt-4 font-thin">Terms of Use</p>
            <p className="text-white mt-4 font-thin">Cookies</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-t-offwhite mt-12">
          <p className="text-white">© 2022 mymdoc.com</p>

          <div className="flex mt-6 md:mt-0">
            <p className="text-white md:mr-8">Privacy</p>
            <p className="text-white">Terms</p>
          </div>

          <div className="flex mt-6 md:mt-0">
            <div className="mr-6 cursor-pointer">
              <FacebookIcon />
            </div>
            <div className="mr-6 cursor-pointer">
              <SendIcon />
            </div>
            <div className="mr-6 cursor-pointer">
              <LinkedinIcon />
            </div>
            <div className="mr-6 cursor-pointer">
              <TwitterIcon />
            </div>
            <div className="mr-6 cursor-pointer">
              <YoutubeIcon />
            </div>
            <div className="mr-6 cursor-pointer">
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
