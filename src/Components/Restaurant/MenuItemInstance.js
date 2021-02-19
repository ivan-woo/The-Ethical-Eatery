import React from 'react'
import { Card, Image, Button } from 'react-bootstrap'

export default function MenuItemInstance({ currentMenuItem, handleAddToCart }) {
  // console.log(currentMenuItem)
  return (
    <Card className="mx-auto mt-2 p-2" style={{ width: "500px"}}>
      {currentMenuItem.name}
      <br/>
      {/* <Image src={"currentMenuItem.itemImgUrl"} /> */}
      {/* <br/> */}
      {currentMenuItem.description}
      <br/>
      ${currentMenuItem.price}
      <button variant="danger" size="sm" onClick={() => handleAddToCart(currentMenuItem)}>Add to Cart</button>
    </Card>
  )
}
