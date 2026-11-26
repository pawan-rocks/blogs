import type { ReactNode } from "react";
import { Box, Text } from "@tantuui/react";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Box className="tui-flex tui-items-center tui-gap-2">
      <Box className="tui-w-8 tui-border-t-2 tui-border-brand-pink-500" />
      <Text as="span" size="md" weight="bold" className="tui-uppercase tui-tracking-widest tui-text-brand-pink-600">{children}</Text>
    </Box>
  );
}

export default Eyebrow;
