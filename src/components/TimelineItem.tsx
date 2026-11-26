import type { ReactNode } from "react";
import { Box, Text } from "@tantuui/react";

interface TimelineItemProps {
  period: string;
  isLast?: boolean;
  children: ReactNode;
}

function TimelineItem({ period, isLast = false, children }: TimelineItemProps) {
  return (
    <div className="tui-flex tui-gap-4">
      <Text as="span" size="xs" weight="semibold" className="tui-w-24 tui-shrink-0 tui-text-right tui-text-brand-black-600">{period}</Text>
      <div className="tui-flex tui-flex-col tui-items-center tui-shrink-0 tui-mt-[6px]">
        <Box className="tui-w-4 tui-h-4 tui-border-4 tui-border-brand-pink-100" rounded="full" bg="brand-pink-600" />
        <Box className="tui-w-px tui-flex-1" bg="brand-pink-300" />
      </div>
      <div className={`tui-flex-1 tui-min-w-0 ${isLast ? "tui-pb-0" : "tui-pb-8"}`}>{children}</div>
    </div>
  );
}

export default TimelineItem;
