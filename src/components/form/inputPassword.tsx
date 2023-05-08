import {
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    FormErrorMessage,
} from "@chakra-ui/react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import React, { useState } from "react";

type customInputPasswordProps = {
    isInvalid: any;
    label: string;
    name: string;
    errorMessage?: string;
    variant: "flushed";
    isRequired?: boolean;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

export default function CustomInputPassword(props: customInputPasswordProps) {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl
            isInvalid={props.isInvalid ? Boolean(props.isInvalid) : false}
            mt="5"
        >
            <FormLabel fontWeight="medium">{props.label}</FormLabel>
            <InputGroup size="md">
                <Input
                    variant={props.variant}
                    name={props.name}
                    type={show ? "text" : "password"}
                    isRequired={props.isRequired ?? false}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                />
                <InputRightElement>
                    <Button
                        variant="unstyled"
                        h="1.75rem"
                        w="0.5"
                        size="md"
                        onClick={handleClick}
                        leftIcon={show ? <MdVisibilityOff /> : <MdVisibility />}
                    ></Button>
                </InputRightElement>
            </InputGroup>
            {props.errorMessage && <FormErrorMessage>{props.errorMessage}</FormErrorMessage>}
        </FormControl>
    );
}
