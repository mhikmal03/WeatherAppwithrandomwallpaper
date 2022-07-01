import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { QuoteContainer, Text } from './QuoteStyles'



const url = 'https://quotable.io/quotes?page=1'


const Quote = () => {

    const [data, setData] = useState(null);

    useEffect (() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(data);

    if (!data) return null;

  return (
    <QuoteContainer>
        <Text>{data.results[0].content}</Text>
        <Text>-{data.results[0].author}</Text>
    </QuoteContainer>
  )
}

export default Quote