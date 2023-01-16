import programs from "assets/images/programs.png";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";

const Programs = () => {
  return (
    <section className="px-12 py-[100px] pb-[150px] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-end w-full 2xl:w-[80%]">
        <div className="">
          <div className="mb-[70px]">
            <h2 className="text-darkBlue text-[50px] font-bold">
              Our <span className="text-primary">self-care</span> programs
            </h2>
            <p className="text-darkBlue">
              Lorem ipsum gdfsgs fstshsj gdtddt gfdrsrst fsrstshsh gdfdhsv
              gsfstshsh johuetrwg hdtsg
            </p>
          </div>
          <div className="relative max-w-[520px]">
            <div className="rounded-t-[30px] bg-lightGreen max-w-[520px] h-[342px]" />
            <img  alt="placeholder-pic"
              src={programs}
              className="mt-4 mr-[-20px] absolute top-5 right-[-10px]"
            />
          </div>
        </div>

        <div className="w-full md:w-[50%] mb-0 md:mb-[-40px] mt-20 md:mt-0">
          <h2 className="text-darkBlue text-[38px] font-bold mb-6">
            Our <span className="text-primary">propel</span> program enables you
            manage your health properly
          </h2>
          <p className="text-darkBlue">
            The mDoc Propel Program is a 24-week self-care program designed to
            increase the value our members get and even drive greater health
            behavior changes through weekly engagements with evidence-based
            clinical content.
          </p>

          <div className="flex mt-10 items-center">
            <PrimaryButton>Sign Up</PrimaryButton>

            <p className="ml-4">Check Plans {">"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
