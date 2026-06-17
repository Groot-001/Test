import vector from "../../assets/Vector.svg";
import LeadCard from "@/components/card/LeadCard";
import Negociate from "../../assets/Formal Tone.svg";
import won from "../../assets/Won.svg";
import lost from "../../assets/lost.svg";
import team from "../../assets/Team.svg";
import plus from "../../assets/Plus.svg";
import call from "../../assets/Call.svg";
import resolved from "../../assets/Resolved.svg";
import send from "../../assets/Send.svg";
import search from "../../assets/Search.svg";
import cross from "../../assets/Close.svg";
import filter from "../../assets/Filter.svg";
import down from "../../assets/Arrow Down.svg";

const ListView = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col gap-6 rounded-l-xl p-6">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          {/* 1-1 */}
          <div className="flex justify-between p-2">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0C111D] font-semibold text-xl leading-[150%]">
                Leads
              </h5>
              <span className="font-normal text-[#667085] text-[15px] leading-[145%]">
                Track, manage and convert your leads into customers
              </span>
            </div>
            <div className="flex gap-2 bg-[#7C3AED] shadow-[0px_1px_2px_0px_#1E1E1E0D] rounded-3xl px-3.5 py-2 items-center">
              <img src={vector} alt="Plus" className="w-4 h-4" />
              <span className="text-[#FFFFFF] font-medium text-[12px] leading-[150%]">
                New Lead
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-full">
              <div className="w-fit bg-[#F9FAFB] border border-[#EAECF0] flex items-center rounded-4xl gap-1 p-1">
                <div className=" rounded-3xl px-2.5 py-2 flex gap-2.5">
                  <span className="text-[#667085] font-medium text-[12px] leading-[150%]">
                    Kanban view
                  </span>
                </div>
                <div className=" bg-[#FFFFFF] border-[#F2F4F7] border shadow-[0px_2px_6px_0px_#00000008] rounded-3xl px-2.5 py-2 flex gap-2.5">
                  <span className="text-[#0C111D] font-medium text-[12px] leading-[150%]">
                    List View
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3.5 items-center w-full">
              <div className="flex-1 bg-[#FFFFFF] rounded-3xl border border-[#EAECF0] flex gap-2 px-3 py-2.5">
                <div className="flex gap-2 w-full">
                  <img src={search} alt="search" className="w-4 h-4" />
                  <span className="text-[#667085] font-normal text-[14px] leading-[145%]">
                    Search lead...
                  </span>
                </div>
                <div className="w-fit">
                  <img src={cross} alt="cross" className="w-4 h-4" />
                </div>
              </div>
              <div className="w-fit bg-[#FFFFFF] rounded-3xl border border-[#EAECF0] flex gap-2 pl-3 pr-[43px] py-2.5">
                <img src={filter} alt="filter" className="w-4" h-4 />
                <span className="text-[#667085] font-normal text-[14px] leading-[145%]">
                  Filters
                </span>
              </div>

              <div className="shrink-0 bg-[#FFFFFF] rounded-3xl border border-[#EAECF0] flex gap-2 px-3.5 py-2.5 items-center">
                <div className="whitespace-nowrap">
                  <span className="font-medium text-[#667085] text-[14px] leading-[145%] pr-1.5">
                    Sort:
                  </span>
                  <span className="text-[#182230] font-medium size-[14px] leading-[145%]">
                    Last Activity
                  </span>
                </div>
                <img src={down} alt="down" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* 1- 2 */}
        <div className="grid grid-cols-8 border border-[#EAECF0] gap-3 rounded-4xl">
          <LeadCard
            icon={<img src={team} className="w-4 h-4" alt="Negociate" />}
            title="Total Leads"
            value={1248}
          />
          <LeadCard
            icon={<img src={plus} className="w-4 h-4" alt="Negociate" />}
            title="New"
            value={342}
          />
          <LeadCard
            icon={<img src={call} className="w-4 h-4" alt="Negociate" />}
            title="Contacted"
            value={245}
          />
          <LeadCard
            icon={<img src={resolved} className="w-4 h-4" alt="Negociate" />}
            title="Qualified"
            value={187}
          />
          <LeadCard
            icon={<img src={send} className="w-4 h-4" alt="Negociate" />}
            title="Proposal Sent"
            value={98}
          />
          <LeadCard
            icon={<img src={Negociate} className="w-4 h-4" alt="Negociate" />}
            title="Negociatios"
            value={54}
          />
          <LeadCard
            icon={<img src={won} className="w-4 h-4" alt="Negociate" />}
            title="Won"
            value={372}
          />
          <LeadCard
            icon={<img src={lost} className="w-4 h-4" alt="Negociate" />}
            title="Lost"
            value={69}
          />
        </div>
      </section>

      <section>second section</section>
    </div>
  );
};

export default ListView;
