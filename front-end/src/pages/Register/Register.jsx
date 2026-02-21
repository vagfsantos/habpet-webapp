import { Logo } from "@/components/logo";
import { ROUTES } from "@/Routes";
import { Button } from "@/style-guide/Button";
import { Card } from "@/style-guide/Card";
import { COLORS } from "@/style-guide/Colors";
import { Form } from "@/style-guide/Form";
import { Input } from "@/style-guide/Input";
import { Label } from "@/style-guide/Label";
import { SubTitle } from "@/style-guide/SubTitle";
import { Title } from "@/style-guide/Title";
import { Text } from "@/style-guide/Text";
import { Box, Stack } from "@mui/system";
import { Link } from "@/style-guide/Link";

export const Register = () => {
  return (
    <Box
      position="absolute"
      m="auto"
      width="fit-content"
      height="fit-content"
      left={0}
      right={0}
      bottom={0}
      top={0}
    >
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Box mb={"-46px"} zIndex={2}>
          <Logo width={'120px'} height={'116px'} />
        </Box>

        <Card>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Title>Sign in</Title>
            <Box width={'52%'}>
              <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </SubTitle>
            </Box>

            <Form>
              <Box mb={"21px"}>
                <Stack direction={'column'}>
                  <Box pl={'12px'}>
                    <Label htmlFor="name">Name*</Label>
                  </Box>
                  <Input type="text" placeholder="Your name..." id="name" name="name" />
                </Stack>
              </Box>

              <Box mb={"21px"}>
                <Stack direction="column">
                  <Box pl="12px">
                    <Label htmlFor="email">E-mail</Label>
                  </Box>
                  <Input type="text" placeholder="Youremail@email.com" id="email" name="email" />
                </Stack>
              </Box>

              <Box>
                <Stack direction="column">
                  <Box pl="12px">
                    <Label htmlFor="Password">Password</Label>
                  </Box>
                  <Input type="password" placeholder="*******" id="Password" name="Password" />
                </Stack>
              </Box>
            </Form>
          </Stack>
        </Card>

        <Box mt={'-20px'}>
          <Stack direction={"row"} justifyContent={"center"}>
            <Button $borderRadius="37px" $width="163px" $height="43px">
              Create
            </Button>
          </Stack>
        </Box>

        <Box mt={"20px"} mb={"5px"}>
          <Text $color={COLORS.BLUE_EXTRA_BOLD} $fontSize="18px" $fontWeight="700">
            Are you have account?
          </Text>
        </Box>
        <Link
          to={ROUTES.LOGIN}
          $color={COLORS.BLUE_BOLD}
          $fontSize="18px"
          $fontWeight="700"
        >
          Login
        </Link>
      </Stack>

    </Box >
  );
}