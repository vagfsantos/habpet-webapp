import { Logo } from "@/components/logo"
import { Card } from "@/style-guide/Card"
import { Input } from "@/style-guide/Input";
import { SubTitle } from "@/style-guide/SubTitle"
import { Title } from "@/style-guide/Title"

export const Login = () => {
  return (
    <>
      <Logo width={'120px'} height={'116px'} />
      <div>
        <Card>
          <Title>Welcome</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>

          <Input type="text" placeholder="Placeholder.." />

        </Card>
      </div>
    </>
  )
}