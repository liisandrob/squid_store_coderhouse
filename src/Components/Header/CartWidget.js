import { Stack, Text } from "@chakra-ui/react";

export const CartWidget = ({
  icon,
  amountItem
}) => 
  <Stack direction={'row'} width={'10'} justifyContent={'center'} spacing={2}>
    {icon}
    <Text>{amountItem > 0 ? amountItem : null}</Text>
  </Stack>