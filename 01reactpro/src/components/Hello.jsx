// const Hello = (props) => {
//     return(
//         <h1>
//             Hello there {props.name1} {props.message} {props.article}
//         </h1>
//     )
// }
// export default Hello;

export default function Hello(props){
    return(
        <h1>
            Hello there {props.name} {props.message} {props.article}
        </h1>
    )
}