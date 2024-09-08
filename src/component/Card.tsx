import React from 'react'
import './Card.css'
interface detail{
    image: string
    title?: string
    details?:string
    
}
const Card:React.FC<detail> = ({image}) =>{
    const style:React.CSSProperties={
        display:'grid',
        gridTemplateColumns:'repeat(5, 1fr)',
        gridTemplateRows:'repeat(6, 1fr)',
        background:'rgb(255,255,0)',
        borderRadius:'10px',
        alignItems:'center',
        justifyItems:'center',
        fontFamily:'system-ui',
        width:'900px',
        height:'250px',
    }
    const item1:React.CSSProperties={
        gridArea:'1 / 1 / 7 / 3',
        width:'100%',
        height:'100%',
    }
    const item2:React.CSSProperties={
        gridArea:'1 / 3 / 2 / 6',
        width:'100%',
        height:'100%',
    }
    const item3:React.CSSProperties={
        gridArea:'2 / 3 / 5 / 6',
        width:'100%',
        height:'100%',
    }
    const item4:React.CSSProperties={
        gridArea:'5 / 3 / 7 / 6',
        width:'100%',
        height:'100%',
    }
  return (
    <div style={style}>
        <div style={item1}>
            <img src={image}  style={{ width: '100%', height: '100%', objectFit:'cover' , borderRadius:'10px 0 0 10px '}} />
        </div>
        <div  style={item2}>
            <div className='CardHead'>
                <h2>B001</h2>
                <h2>Edit</h2>
            </div>
        </div>
        <div style={item3}>
            <div className="CardExplain">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus, tenetur ipsum vero assumenda distinctio eum odit officiis qui mollitia?
            </div>
        </div>
        <div style={item4}>
            <div className="CardDeatail">
                <h2>1</h2>
                <h2>1</h2>
                <h2>1</h2>
                <h2>1</h2>
                <h2>1</h2>
            </div>
        </div>
    </div>
  )
}

export default Card