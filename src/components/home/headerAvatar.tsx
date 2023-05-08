import { Avatar, VStack, Text, Box } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

type HeaderAvatarProps = {
    linkImg?: string;
    roleName?: string;
    fullname?: string;
};

export default function HeaderAvatar(props: HeaderAvatarProps) {
    return (
        <>
            <Avatar size={"sm"} name={props.fullname} src={props.linkImg} />
            <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
            >
                <Text fontSize="sm">{props.fullname}</Text>
                <Text fontSize="xs" color="gray.600">
                    {props.roleName}
                </Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
            </Box>
        </>
    );
}
