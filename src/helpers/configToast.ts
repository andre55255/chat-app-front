import { UseToastOptions } from "@chakra-ui/react";

const position = "top-right";
const variant = "left-accent";
const isClosable = true;
const duration = 3000;

export const toastSuccess = (message: string | undefined): UseToastOptions => {
    return {
        position,
        variant,
        isClosable,
        duration,
        title: message,
        status: "success",
    };
};

export const toastError = (message: string | undefined): UseToastOptions => {
    return {
        position,
        variant,
        isClosable,
        duration,
        title: message,
        status: "error",
    };
};

export const toastWarning = (message: string | undefined): UseToastOptions => {
    return {
        position,
        variant,
        isClosable,
        duration,
        title: message,
        status: "warning",
    };
};

export const toastInfo = (message: string | undefined): UseToastOptions => {
    return {
        position,
        variant,
        isClosable,
        duration,
        title: message,
        status: "info",
    };
};
