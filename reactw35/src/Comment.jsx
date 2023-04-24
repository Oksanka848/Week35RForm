import React from 'react'

export default function Comment(props) {
  let props = {id, user, comment};
  return (
    <><div key={props.id}>
    <span>{props.id} </span>
    <div className='user_id'>
              <a href="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg"><img src="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg" width="50" 
height="50" alt="avatar"/></a>
<span>   {props.user}</span></div>
    <div className="comments">{props.comment}</div>
    <button className="btn_del" onClick={this.removeComment.bind(null, props.id)}>Удалить комментарий</button>
  </div></>
  )
}
