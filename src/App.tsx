import React, { useState, useEffect } from 'react'
import HttpClient from './HttpClient'



const App = () => {
  const [apod, setApod] = useState<string | any>()

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      const thisArr = apodData.data.photos
      const newData = thisArr.map((data) => {
        return data
        
      })
      setApod(newData)
      console.log(newData) 
    })
  }, [])

 
    
  
  return (
    
    <div style={{ maxWidth: 900, padding: 30 }}>
      {/* <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2> */}
      {apod && 
      apod.map((data) => {

      return(

        <article>
         
          <img src={data.img_src} id={data.id}alt="APOD" width="800" height="auto" />
          {/* <p>{apod.explanation}</p> */}
          <pre
            style={{
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            <hr />
            {JSON.stringify(apod, null, 2)}
          </pre>
        </article>)})}
      
    </div>
  )
}

export default App