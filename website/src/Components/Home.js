import React from 'react'


const Home = (props) =>{
    let handleBtn = () => {
        props.history.push('./store')
    }
  return(
    <div className = "home">
    <div className = "home_body">
    <h2>Welcome To 5-Star-Cool-Games</h2>
    Lorem ipsum dolor sit amet, eos id eros facer facete.
    Partem ancillae propriae ei nam, cu qui debitis detracto.
    Nec dolorum facilis expetenda ea, has at elit consequuntur.
    In duo augue semper dolorum. Ad per harum aperiri.
    Intellegat sadipscing qui ad, habemus tibique at est. Est quas malis ridens te, eu fugit habemus patrioque vix.
     Eam odio vidisse mediocritatem cu, nam postulant petentium at, cu eos ipsum quaerendum.
      Mei purto noluisse partiendo te, sed legendos expetenda scribentur no.
      </div>
      <button className = "btn-large blue-grey darkekn-4"
      onClick = {handleBtn}>View Store</button>
    </div>
  )
}

export default Home
