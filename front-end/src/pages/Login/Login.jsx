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
import { postAuth} from "@/services/Auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

export const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e, data) => {
    e.preventDefault();

    try {
      const dataAuth = {
        email: data.email,
        password: data.password,
      }

      const response = await postAuth(dataAuth);

      localStorage.setItem('authToken', response.auth_key);

      navigate('/')


    } catch (error) {
      console.log('ERROR', error)
      toast.error('Server error. Please, try later!')
    }
  }

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

            <Form id="login-form">
              <Box mb="21px">
                <Stack direction="column">
                  <Box pl="12px">
                    <Label for="email">E-mail</Label>
                  </Box>
                  <Input
                    type="text"
                    placeholder="Youremail@email.com"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Stack>
              </Box>

              <Stack direction="column">
                <Box pl="12px">
                  <Label for="Password">Password</Label>
                </Box>
                <Input
                  type="password"
                  placeholder="******"
                  id="Password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Stack>

            </Form>
          </Stack>
        </Card>
        <Box mt="-20px">
          <Stack direction="row" justifyContent="center" width="163px">
            <Button
              form="login-form"
              type="submit"
              onClick={() => { handleLogin(event, { email, password }) }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>
        <Box mt="20px" mb="5px">
          <Text $color={COLORS.BLUE_EXTRA_BOLD} $fontSize="18px">Are you new here?</Text>
        </Box>
        <Link to={ROUTES.REGISTER} $color={COLORS.BLUE_BOLD} $fontSize="18px" $fontWeight="700">Create a new account</Link>
      </Stack>
      <ToastContainer />
    </Box>
  )
}