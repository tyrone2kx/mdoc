import { HomeIcon, NaviHealthIcon, TeleIcon, UserIcon } from "assets/icons";
import Card from "./Card";
import approach from "assets/images/approach.png";

const Approach = () => {
  return (
    <section className="px-12 py-[70px] bg-offwhite flex items-center justify-center">
      <div className="w-full md:w-[95%] lg:w-[70%] flex flex-col items-center">
        <div className="mb-12">
          <h2 className="text-darkBlue font-bold text-[38px] text-center">
            mDoc self-care{" "}
            <span className="text-primary">four-pronged approach</span>
          </h2>
          <p className="text-darkBlue text-[20px] text-center mt-2">
            The mDoc team is committed to prioritizing your wellbeing through
            our four pronged approach to quality self-care delivery.
          </p>
        </div>

        <div className="relative w-full 2xl:max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:mb-[100px]">
            <Card
              icon={<UserIcon />}
              text={
                <>
                  Virtual coaches and digital nudges through{" "}
                  <b>CompleteHealth™</b>
                </>
              }
            />
            <Card
              icon={<NaviHealthIcon />}
              text={
                <>
                  Digital directory of providers via <b>NaviHealth™.ai</b>
                </>
              }
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Card
              icon={<HomeIcon />}
              text={
                <>
                  In person community based <b>NudgeHubs™</b> and community
                  ambassadors
                </>
              }
            />
            <Card
              icon={<TeleIcon />}
              text={
                <>
                  Tele-education of providers and patients. <br />
                  <b>mDoc Quality Network (MQN)</b>
                </>
              }
            />
          </div>

          <div className="hidden md:flex items-center justify-center absolute top-[12.5%] md:right-[22.5%]  h-[75%] w-[55%]">
            <img className=" w-full" alt="placeholder-pic" src={approach} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
