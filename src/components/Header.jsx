

function Header({text, bgColor, textColor}) {


const headerStyles= {
    backgroundColor:bgColor,
    color:textColor
}

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps={
    text:'Feedback',
    bgColor:'#100F0F',
    textColor:'#E2DCC8',
}

export default Header