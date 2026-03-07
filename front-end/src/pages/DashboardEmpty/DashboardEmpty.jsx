import { Box, Stack } from "@mui/system";
import { Title } from "@/style-guide/Title";
import { SubTitle } from "@/style-guide/SubTitle";
import { Card } from "@/style-guide/Card";
import ImageDashboardEmpty from "@/assets/img/dashboard_empty.png"
import { Button } from "@/style-guide/Button";
import { Image } from "@/style-guide/Image";


export const DashBoardEmpty = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignContent="center"
    >
      <Stack justifyContent="center" alignItems="center">
        <Title>Hello, Matheus!</Title>
        <SubTitle>Let's get started creating a new pet</SubTitle>
      </Stack>

      <Stack alignItems="center" justifyContent="center">
        <Box
          width="471px"
          mt="125px"
          position="relative"
        >
          <Card>
            <Stack alignItems="center">
              <Box mt="-100px" width="425px">
                <Image src={ImageDashboardEmpty} />
              </Box>
            </Stack>
          </Card>

          <Stack direction="row" justifyContent="center">
            <Box width="198px" mt="-22px">
              <Button> Pick your pet </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>

    </Stack>
  );
}