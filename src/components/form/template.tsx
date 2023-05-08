import React from "react";
import { VStack } from "@chakra-ui/react";

type templateFormProps = {
    children: JSX.Element | JSX.Element[];
    autoComplete: "on" | "off";
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
} 

export default function TemplateForm(props: templateFormProps) {
    return (
        <form autoComplete={props.autoComplete} onSubmit={props.handleSubmit}>
            <VStack spacing={2} align="flex-start">
                {props.children}
            </VStack>
        </form>
    );
}