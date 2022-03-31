import { gql, useMutation } from "@apollo/client";
import React from "react";
//this file is just a practice for how mutation works

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
        quantityPerUnit
      }
    }
  }
`;

export const Mutation = () => {
  const [createProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "Hotdog",
        quantityPerUnit: 4,
      },
    }
  );

  console.log(data);

  return (
    <div>
      <button onClick={() => createProduct()}>Mutation</button>
      {error && <div>Something went wong.......</div>}
      {loading && <div>Loading...........</div>}
      {data && (
        <div>
          <h2>{data.results.name}</h2>
        </div>
      )}
    </div>
  );
};
