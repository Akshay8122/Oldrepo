import React from 'react'
import { gql,useMutation } from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name:String!,$quantityPerUnit: Int!, $supplierID: Int! ){
    CreateProduct(record:{
        name:$name,
        supplierID:$supplierID,
        quantityPerUnit:$quantityPerUnit,
    }){
        record {
            name
        }
    }
}`


export default function Mutation() {

  const [createProduct, {data,loading,error}] = useMutation(CREATE_PRODUCT,{
      variables: {
          name : "Chinese Samosa",
          quantityPerUnit:"1 combo",
          supplierID:1
      }
  })

  console.log(data,loading,error);

  return (
    <div><button onClick={() => createProduct()}>Click Me</button></div>
  )
}
