export default function Title({name,color}){
    console.log(name);
    return(
        <h2 style={{color:color}}> {name} </h2>
    );
}