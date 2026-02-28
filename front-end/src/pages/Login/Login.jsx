import { Box, Stack } from "@mui/system";
import { Logo } from "@/components/logo"
import { Card } from "@/style-guide/Card"
import { Input } from "@/style-guide/Input";
import { SubTitle } from "@/style-guide/SubTitle"
import { Label } from "@/style-guide/Label"
import { Title } from "@/style-guide/Title"
import { Button } from "@/style-guide/Button";
import { Form } from "@/style-guide/Form";
import { Link } from "@/style-guide/Link";
import { COLORS } from "@/style-guide/Colors";
import { Text } from "@/style-guide/Text";
import { ROUTES } from "@/Routes";

export const Login = () => {
  return (
    <Box
      position="absolute"
      m="auto"
      width="fit-content"
      height="fit-content"
      left={0}
      right={0}
      top={0}
      bottom={0}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box mb="-46px" zIndex={2}>
          <Logo width={'120px'} height={'116px'} />
        </Box>

        <Card>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Title>Welcome</Title>
            <Box width="52%">
              <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </SubTitle>
            </Box>

            <Form>
              <Box mb="21px">
                <Stack direction="column">
                  <Box pl="12px">
                    <Label for="email">E-mail</Label>
                  </Box>
                  <Input type="text" placeholder="Youremail@email.com" id="email" name="email" />
                </Stack>
              </Box>

              <Stack direction="column">
                <Box pl="12px">
                  <Label for="Password">Password</Label>
                </Box>
                <Input type="password" placeholder="******" id="Password" name="Password" />
              </Stack>


            </Form>
          </Stack>
        </Card>
        <Box mt="-20px">
          <Stack direction="row" justifyContent="center">
            <Button $borderRadius="37px" $width="163px" $height="43px" onClick={() => handleGET()}>Sign In</Button>
          </Stack>
        </Box>
        <Box mt="20px" mb="5px">
          <Text $color={COLORS.BLUE_EXTRA_BOLD} $fontSize="18px">Are you new here?</Text>
        </Box>
        <Link to={ROUTES.REGISTER} $color={COLORS.BLUE_BOLD} $fontSize="18px" $fontWeight="700">Create a new account</Link>
      </Stack>
    </Box>
  )
}