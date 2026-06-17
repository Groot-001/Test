import { ChevronDown, ListFilter, Search, X } from "lucide-react";
import vector from "../../assets/Vector.svg";

const ListView = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col gap-6">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
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
              <img src={vector} alt="Plus" className="size-4" />
              <span className="text-[#FFFFFF] font-medium text-sm leading-[150%]">
                New Lead
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <div>
              <div className="bg-[#F9FAFB] border-[1] border-[#EAECF0] flex rounded-4xl gap-1 p-1">
                <div className="rounded-3xl px-2 py-2.5">
                  <span className="text-[#667085] font-medium text-[12px] leading-[150%]">
                    Kanban view
                  </span>
                </div>
                <div className="bg-[#FFFFFF] border-[#F2F4F7] border-[1] shadow-[0px_2px_6px_0px_#00000008] rounded-3xl px-2 py-2.5">
                  <span className="text-[#0C111D] font-medium text-[12px] leading-[150%]">
                    List View
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3.5 items-center">
              <div className="bg-[#FFFFFF] rounded-3xl border-[1px] border-[#EAECF0] flex gap-2 px-3 py-2.5">
                <div className="flex gap-2">
                  <Search size={16} />
                  <span className="text-[#667085] font-normal text-[14px] leading-[145%]">
                    Search lead...
                  </span>
                </div>
                <div>
                  <X size={16} />
                </div>
              </div>
              <div className="bg-[#FFFFFF] rounded-3xl border-[1px] border-[#EAECF0] flex gap-2 px-3 py-2.5">
                <ListFilter size={16} />
                <span className="text-[#667085] font-normal text-[14px] leading-[145%]">
                  Filters
                </span>
              </div>
              <div className="bg-[#FFFFFF] rounded-3xl border-[1px] border-[#EAECF0] flex gap-2.5 px-3 py-2.5">
                <span className="font-medium text-[#667085] text-[14px] leading-[145%]">
                  Sort:
                </span>
                <span className="text-[#182230] font-medium size-[14px] leading-[145%]">
                  Last Activity
                </span>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>

        <div>second</div>
      </section>

      <section>second section</section>
    </div>
  );
};

export default ListView;
