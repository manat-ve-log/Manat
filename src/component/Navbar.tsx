import React from 'react'
import style from './Navbar.module.css'
function Navbar() {
  return (
    <div className={style.bigbody}>
        <div className={style.body}></div>
        <div className={style.container}>
            <div className={style.box1}>
                <div className={style.boxdate1}>1</div>
                <div className={style.boxdate2}>2</div>
                <div className={style.boxdate3}>3</div>
                <div className={style.boxdate4}>4</div>
                <div className={style.boxdate5}>5</div>
                <div className={style.boxdate6}>6</div>
                <div className={style.boxdate7}>7</div>
            </div>
            <div className={style.box2}></div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar