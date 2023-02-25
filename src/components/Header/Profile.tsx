import { Flex, Avatar, Box, Text } from '@chakra-ui/react'

interface PropfileProps {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: PropfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Michelangelo Cali</Text>
          <Text color="gray.300" fontSize="small">
            michelangelocali@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Michelangelo Cali"
        src="https://avatars.githubusercontent.com/u/90471567?s=400&u=f07f2c9d8cb772408b5396e1a1bc0fe6126a843f&v=4"
      />
    </Flex>
  )
}
