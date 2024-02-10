import './Project.css'

interface Props{
    text: string;
    color: string;
}

export const Chip = ({text, color}: Props)=>{
    const opaqueColor = `${color}26`

    return (
        <span className="chip" style={{backgroundColor: opaqueColor, color: color}}>{text}</span>
    );
}