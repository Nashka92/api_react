import { useParams } from "react-router-dom";


const Page4 = () =>{
    const {nom} = useParams();
    const {id} = useParams();
    return(
        <h1>Page 4 {nom} {id}</h1>
    )
}

export default Page4;