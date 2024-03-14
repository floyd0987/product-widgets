import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import InfoOutline from "../../assets/info_outline.svg";

const Tooltip = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="mx-1">
          <img src={InfoOutline} className="w-4 h-4" alt="InfoOutline" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="bg-white  p-6 text-center">
          <p>
            This widget links directly to your public profile so that you can
            easily share your impact with your customers. Turn it off here if
            you do not want the badge to link to it.
          </p>

          <div className="mt-2">
            <a href="#" className="text-[#3b755f] font-bold">
              View Public Profile
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Tooltip;
