import Title from "./Title";

export default function TitleBox(){
    let name=["Suchi","Pavi","Chaithra"];
    let colors=["orange","blue","green"];
    return(
        <>
            <Title name={name[0]} color={colors[0]}/>
            <Title name={name[1]} color={colors[1]}/>
            <Title name={name[2]} color={colors[2]}/>
        </>
    );
}