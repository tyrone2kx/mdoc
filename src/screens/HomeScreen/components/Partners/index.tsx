import merck from "assets/images/merck.png";
import mit from "assets/images/mit.png";
import boehringer from "assets/images/boehringer.png";
import usaid from "assets/images/usaid.png";
import google from "assets/images/google.png";
import covid from "assets/images/covid.png";
import echo from "assets/images/echo.png";
import janssen from "assets/images/janssen.png";
import who from "assets/images/who2.png";
import hla from "assets/images/hla.png";
import cchub from "assets/images/cchub.png";
import jacaranda from "assets/images/jacaranda.png";

const Partners = () => {
  return (
    <section className="p-12 py-[100px]">
      <div className="flex justify-center">
        <h3 className="text-darkBlue text-[28px] text-center font-bold lg:max-w-[50%]">
          We have strong business recognition and partnerships across the world.
        </h3>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-[80%] flex flex-col md:flex-row flex-wrap justify-between items-center">
          <div>
            <img alt="placeholder-pic" className="m-4" src={merck} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={mit} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={boehringer} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={usaid} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={google} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={covid} />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="w-[80%] flex flex-col md:flex-row flex-wrap justify-between items-center">
          <div>
            <img alt="placeholder-pic" className="m-4" src={echo} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={janssen} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={who} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={hla} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={cchub} />
          </div>
          <div>
            <img alt="placeholder-pic" className="m-4" src={jacaranda} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
