import { Text, Icon } from "@chakra-ui/react";
import { FiMessageCircle } from "react-icons/fi";

type LogoProps = {
    isMobile: boolean
}

export default function Logo(props: LogoProps) {
    return (
        <div>
            <Text
                display={props.isMobile ? { base: "flex", md: "none" } : {}}
                justifyContent="center"
                alignItems="center"
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
                color="whatsapp.400"
            >
                <Icon 
                    fontSize="2xl"
                    as={FiMessageCircle}
                    color="whatsapp.400"
                    mr=".3rem"
                />
                Chat
            </Text>
        </div>
    );
}
