import { createColumnHelper } from "@tanstack/react-table";
import { Avatar } from "./Avatar";
import dualarrow from "../assets/Dual arrow.svg";
import sourceimg from "../assets/source_Image-26.png";
import dot from "../assets/_Dot.svg";
import img from "../assets/source_Image-20.png";

export type Visitor = {
  id: string;
  name: string;
  status: string;
  source: string;
  lastActivity: string;
  owner: {
    name: string;
    avatar?: string;
  };
  email: string;
  avatar?: string;
};

export const visitors: Visitor[] = [
  {
    id: "1",
    name: "Ravi Kumar",
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Ravi Kumar",
      avatar: sourceimg,
    },
    email: "ravi@email.com",
  },
  {
    id: "2",
    name: "Sarah Smith",
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Darius Finch",
      avatar: sourceimg,
    },
    email: "sarah@email.com",
  },
  {
    id: "3",
    name: "Micheal Brown",
    avatar: img,
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Darius Finch",
      avatar: sourceimg,
    },
    email: "brown@email.com",
  },
  {
    id: "4",
    name: "james Fox",
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Darius Finch",
      avatar: sourceimg,
    },
    email: "jm@email.com",
  },
  {
    id: "5",
    name: "Tom Johnson",
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Darius Finch",
      avatar: sourceimg,
    },
    email: "tom@email.com",
  },
  {
    id: "6",
    name: "Ravi Kumar",
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Darius Finch",
      avatar: sourceimg,
    },
    email: "ravi@email.com",
  },
  {
    id: "7",
    name: "Ravi Kumar",
    status: "New",
    source: "Website Form",
    lastActivity: "2 mins ago",
    owner: {
      name: "Darius Finch",
      avatar: sourceimg,
    },
    email: "ravi@email.com",
  },
];

const columnHelper = createColumnHelper<Visitor>();

export const LeadColumns = [
  columnHelper.accessor("name", {
    header: () => (
      <div className="flex items-center gap-1">
        <span>Visitor</span>
        <img src={dualarrow} alt="dualarrow" className="w-4 h-4" />
      </div>
    ),

    cell: ({ row }) => {
      const visitor = row.original;

      return (
        <div className="flex items-center gap-3">
          <Avatar avatar={visitor.avatar} name={visitor.name} />

          <div>
            <p className="font-medium">{visitor.name}</p>

            <p className="text-sm text-gray-500">{visitor.email}</p>
          </div>
        </div>
      );
    },
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <div className="flex items-center gap-0.5 rounded-[4px] px-[6px] py-2px border-[#EAECF0] border w-fit">
        <img src={dot} alt="dot" className="w-1.5 h-1.5" />
        <span className="font-normal text-[12px] text-[#182230] leading-[150%]">
          {info.getValue()}
        </span>
      </div>
    ),
  }),

  columnHelper.accessor("source", {
    header: "Source",
  }),

  columnHelper.accessor("lastActivity", {
    header: "Last Activity",
  }),

  columnHelper.accessor("owner", {
    header: "Owner",
    cell: ({ row }) => {
      const visitor = row.original;

      return (
        <div className="flex items-center gap-3">
          <Avatar avatar={visitor.owner.avatar} name={visitor.name} />

          <div>
            <p className="font-semibold text-[#0C111D] text-[14px] leading-[145%]">
              {visitor.owner.name}
            </p>
          </div>
        </div>
      );
    },
  }),
];
