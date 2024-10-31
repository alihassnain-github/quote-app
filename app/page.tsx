"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import CardSkeleton from "@/components/card-skeleton";
import ErrorMessage from "@/components/error";
import { useEffect, useState } from "react";


type QuoteType = {
  q: string,
  a: string
}

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [error, setError] = useState(false);

  const getQuote = async () => {
    setIsLoading(true)
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4ad738607amshe86028eb9f5358ap13ab04jsncf6f7322c7e4',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      setQuote({ q: data.content, a: data.originator.name })
      setError(false)
      setIsLoading(false)
    }
    catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <main className="bg-slate-100 min-h-screen h-full w-full flex items-center justify-center px-4">
      {
        error ? (
          <div>
            <ErrorMessage />
          </div>
        ) : (
          isLoading ? (
            <div>
              <CardSkeleton />
              <Button getQuote={getQuote} />
            </div>
          ) : (
            <div>
              <Card author={quote?.a} quote={quote?.q} />
              <Button getQuote={getQuote} />
            </div>
          )
        )
      }
    </main>
  );
}
