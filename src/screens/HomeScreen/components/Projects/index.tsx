import Card from "./Card";
import who from "assets/images/who.png";

const Projects = () => {
  return (
    <section className="flex justify-center">
      <div className="p-12 flex flex-col items-center w-full 2xl:w-[70%]">
        <h3 className="font-bold text-[28px] md:text-[48px] text-center text-darkBlue">
          Partnership-based projects
        </h3>

        <div className=" flex flex-wrap justify-center md:justify-between mt-8 w-full ">
          <Card
            title="RICOM 3"
            description={`The RICOM3 project is centered on empowering women of reproductive
              age with the virtual self-care support that they need to better
              manage their health.`}
          />
          <Card
            title="Janssen"
            description={`The Janssen project is a Patient Assistance Program (PAP) created to improve access to medication and self-care support for patients living with prostate cancer.`}
          />
          <Card
            title="Roche"
            description={`The Roche Patient Support Programme was created to improve access to medicines and access to self-care support for people living with cancer.`}
          />
          <Card
            title="Rupe Flexi Health"
            description={`Rupe Flexi Health is a financing mechanism for people diagnosed with breast cancer to afford their cancer treatment via a loan product. `}
          />
          <div
            className={
              "rounded-[20px] w-[537px] p-12 py-[100px] pt-[50px] my-8 "
            }
            style={{
              background: "rgba(72, 181, 99, 0.05)",
              border: "1px solid rgba(54, 137, 74, 0.1)",
              boxShadow:
                "inset 23.9333px -23.9333px 23.9333px rgba(163, 166, 168, 0.1), inset -23.9333px 23.9333px 23.9333px rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(23.9333px)",
            }}
          >
            <img  alt="placeholder-pic" src={who} />
            <p className="text-primary text-[24px] mb-4">WHO</p>
            <p className="text-darkBlue">
              As part of the mDoc Quality Network’s efforts to improve the
              quality of care in Nigeria, mDoc is working with the Nigerian
              Federal Ministry of Health (FMOH) and the World Health
              Organization to perform a situational analysis of the current
              state of quality in the Nigerian Health System.
            </p>
          </div>
        </div>

        <div className=" flex flex-wrap mt-8  justify-center md:justify-between w-full max-w-[1400px]">
        </div>
      </div>
    </section>
  );
};

export default Projects;
