import HomeLayout from "../../components/home/homeLayout";

type AuxProps = {
    children: JSX.Element | JSX.Element[];
}

export default function PrivateLayout(props: AuxProps) {
    return (
        <HomeLayout>
            {props.children}
        </HomeLayout>
    );
} 
