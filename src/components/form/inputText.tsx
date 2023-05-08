import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

type customInputProps = {
    isInvalid: any;
    label: string;
    name: string;
    errorMessage?: string;
    type: "text" | "email";
    variant: "flushed";
    isRequired?: boolean;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string | number | readonly string[] | undefined;
};

export default function CustomInputText(props: customInputProps): JSX.Element {
    return (
        <FormControl
            isInvalid={props.isInvalid ? Boolean(props.isInvalid) : false}
            mt="5"
            isRequired={props.isRequired ?? false}
        >
            <FormLabel fontWeight="medium">{props.label}</FormLabel>
            <Input
                variant={props.variant}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
            {props.errorMessage && <FormErrorMessage>{props.errorMessage}</FormErrorMessage>}
        </FormControl>
    );
}
