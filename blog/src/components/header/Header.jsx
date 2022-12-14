import "./header.css";

export default function Header() {
  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      /> */}
      <img className= "headerImg" src="https://source.unsplash.com/1400x400/?nature,sky"
            alt=""/>
    </div>



</>
  );
}
