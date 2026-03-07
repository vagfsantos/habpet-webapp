import { Box, Stack } from "@mui/system";
import { Title } from "@/style-guide/Title";
import { SubTitle } from "@/style-guide/SubTitle";
import { Card } from "@/style-guide/Card";
import { ButtonIcon } from "@/style-guide/ButtonIcon";

import IconPlusButton from '@/assets/svg/icon-plus-button.svg?react'
import PetExemple from "@/assets/img/pet_exemple.png"
import { Image } from "@/style-guide/Image";

export const DashboardPet = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignContent="center"
    >
      <Stack justifyContent="center" alignItems="center">
        <Title>Here is [PetName]</Title>
        <SubTitle>Let's get started creating a new habit</SubTitle>
      </Stack>

      <Stack alignItems="center" justifyContent="center">
        <Box
          width="471px"
          mt="125px"
          position="relative"
        >
          <Card>
            <Stack alignItems="center">
              <Box mt="-102px">
                <Image src={PetExemple} />
              </Box>
            </Stack>
          </Card>

          <Stack direction="row" justifyContent="center">
            <Box width="198px" height="43px" mt="-22px">
              <ButtonIcon $borderRadius="43px">
                <IconPlusButton />
                Add new habit
              </ButtonIcon>
            </Box>
          </Stack>
        </Box>
      </Stack>

    </Stack>
  );
}
