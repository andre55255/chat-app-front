import React from "react";
import "./linksCustom.style.css";

type CustomLinksProps = {
    label: string;
    handleClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export default function CustomLinks(props: CustomLinksProps) {
    return (
        <span className="links-login" onClick={props.handleClick}>{props.label}</span>
    );
}