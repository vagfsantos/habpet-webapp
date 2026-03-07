import { COLORS } from "@/style-guide/Colors";
import { Box, Stack } from "@mui/system";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <Box
      bgcolor={COLORS.BLUE_REGULAR}
      mb="20px"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height={65}
      >

        <Box
          mb="-47px"
          zIndex="2"
        >
          <Logo
            width={'93px'}
            height={'90px'}
          />
        </Box>

      </Stack>
    </Box>
  );
}