export default function Price({old,newPrice}){
    let oldStyles={
        textDecorationLine:"line-through",
    };
    let newStyles={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"#e0c367",
        height:"32px",
        borderBottomLeftRadius:"16px",
        borderBottomRightRadius:"16px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    };
    return(
        <div style={styles}>
            <span style={oldStyles}>&#8377;{old}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>&#8377;{newPrice}</span>
        </div>
    );
}