import { Link } from "react-router-dom";

export default function Button(props){
    return (<Link to="/menu"><button
        css={{
            width: '360px',
            height: '120px',
            background: 'var(--green)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
            fontWeight: '620',
            fontSize: '40px',
            color: 'white',
            margin: '0 30px',
            '&:hover': {
                opacity:'50%'
            }
        }}
    >{props.title}</button></Link>)
}