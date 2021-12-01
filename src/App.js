import React from 'react'
import './App.css';
import Logos from  './me.jpg';

class App extends React.Component {
   profil = {
     fullName:"Belbekri Souhail",
     bio:"In god we trust",
     Profession:"Software engineer",
     imgSrc: Logos
   };
   state = {
     toggle:false,
   };
   
   constructor(props)
   {super(props)
   this.state = {
    count: 0
  }}
   handleShow = () => {
     this.setState({toggle:true})
     this.clear = setInterval(this.ValueCount,1000);
   };
   handleHide = () => {
     this.setState({toggle:false})
     clearInterval(this.clear);
   };
   handle = () => {
    this.state.toggle ? this.handleHide():this.handleShow()
   };
   HandleName = () => {
    alert ( `hello Belbekri Souhail`)
  };
   ValueCount = () => {
     this.setState(prevState => ({count: prevState.count+1}))
   }
  render()
  {
  return (
    <div>
     {
     this.state.toggle ? <div><header  className="box9"></header><main className="box11"><div  className="box3"><div className="box2"><img src = {this.profil.imgSrc} alt="Me" style={{borderRadius:"6px 6px 6px 6px"}}/><div style={{fontSize:"12px",verticalAlign:"middle"}}><p style={{display:"flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle"}}>fullName:</p><p>{this.profil.fullName}</p></div></div><div className="box1"><p style={{paddingTop:"20%"}}>Bio:</p><p>{this.profil.bio}</p><p>Profession:</p><p>{this.profil.Profession}</p></div><div><button className="box4"  onClick={this.HandleName}>Click me</button></div></div></main><footer className="box10" ></footer></div>:null
     }
     <header  className="box9"></header>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30%",width:"100%",height:"50px",transform: "translate(2%,0%)",borderRadius:"4px 4px 4px 4px"}}><p  style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10%",width:"200px",height:"50px",backgroundColor:"rgb(4, 4, 87)",color:"white",borderRadius:"4px 4px 4px 4px"}}>Current Count: {this.state.count} sec</p></div>
     <div className="box12"><button className="box13" onClick={this.handle} >Toggle</button></div>
     
     <footer className="box10" ></footer>
    </div>
  );
}}

export default App;