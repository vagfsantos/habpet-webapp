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
import { postRegisterUser } from "@/services/Users";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleRegisterUsers = async (e, data) => {
    e.preventDefault();

    try {
      const dataUser = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      await postRegisterUser(dataUser);
      toast.success('User create succesfully!', {
        icon: <span>🙌</span>
      });
      navigate('/login');

    } catch (error) {
      console.log("ERROR", error);
      toast.error('Error creating account.', {
        icon: <span>😢</span>
      });
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

            <Form id="register-form">
              <Box mb={"21px"}>
                <Stack direction={'column'}>
                  <Box pl={'12px'}>
                    <Label htmlFor="name">Name*</Label>
                  </Box>
                  <Input
                    type="text"
                    placeholder="Your name..."
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                  />
                </Stack>
              </Box>

              <Box mb={"21px"}>
                <Stack direction="column">
                  <Box pl="12px">
                    <Label htmlFor="email">E-mail</Label>
                  </Box>
                  <Input
                    type="text"
                    placeholder="Youremail@email.com"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                </Stack>
              </Box>

              <Box>
                <Stack direction="column">
                  <Box pl="12px">
                    <Label htmlFor="Password">Password</Label>
                  </Box>
                  <Input
                    type="password"
                    placeholder="*******"
                    id="Password"
                    name="Password"
                    valeu={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
              </Box>
            </Form>
          </Stack>
        </Card>

        <Box mt={'-20px'}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            width="163px"
          >
            <Button
              form="register-form"
              type="submit"
              onClick={() => handleRegisterUsers(event, { name, email, password })}
            >
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
      <ToastContainer />
    </Box >
  );
}