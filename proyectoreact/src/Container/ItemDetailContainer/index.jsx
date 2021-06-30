import React, { useState, useEffect } from "react";
import { ItemDetail } from "../../components/ItemDetail";

export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=zGLQNC4UITLxGFyqAZonoDQQvRjpsMnx")
            .then(response => response.json())
            .then(data => {
                setItem([data.results.books[1]])
            })
        }, [])
    
        return (
            <>
                {
                    !!Object.keys(item).length 
                        ? <ItemDetail item={item} />
                        : <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                }
            </>
        )
    }
  