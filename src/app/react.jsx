import React from 'react'
import ReactDOM from 'react-dom'
import Cards1 from './cards'
const Index = () => {
  return (
    <div className="row">
      <Cards1 cardlist1='最新案件' cardlist2='資管系作業一' cardlist3='3月17日' cardlist4='這是一個能夠在本機環境開發的前端網站，使用SASS建構出快速的CSS環境' />
      <Cards1 cardlist1='最讚案件' cardlist2='資管系作業二' cardlist3='3月24日' cardlist4='這是一個能夠在本機環境開發的前端網站，使用Gulp在Node.js環境下開發的快速開發環境' />
    </div>
  )
}
ReactDOM.render(<Index />, document.querySelector('#cards'))
