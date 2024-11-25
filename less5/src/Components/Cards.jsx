import Card from "react-bootstrap/Card"; 
import React from "react"; 


 function Cards() { 
  return ( 
    <> 
      <div className="text-center">
      <Card style={{ width: "22rem"}}> 
        <Card.Body> 
          <Card.Title style={{ color: "green" }}>Products </Card.Title> 
          <Card.Subtitle className="mb-2 text-muted"> 
      
            One Stop Shop
          </Card.Subtitle> 
          <Card.Text> 
       Shampoos,Lotions, Beauty products for Men and Women
          </Card.Text> 
        
        </Card.Body> 
      </Card> 
      </div>
    </> 
    
  ); 
} 
      
       

export default Cards;