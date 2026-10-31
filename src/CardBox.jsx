import Card from "./Card";

export default function CardBox(){
    let styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        flexWrap: "wrap"
    };
    return(
        <div style={styles}>
            <Card idx={0}/>
            <Card idx={1}/>
            <Card idx={2}/>
            <Card idx={3}/>
        </div>
    );
}