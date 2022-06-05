import React from 'react'

export default function Favorites() {
    const favorites = localStorage.getItem('lovedCats')
    const text = favorites?.split('},')
    const data = text?.map(item => {
        if(item[item.length-1] != '}'){
            return (item + "}")
        }
        else return (item)
        
    })
    console.log(text)
  return (
    <>
    <div className='content'>
      <button className='btn btn-danger' onClick={()=>localStorage.removeItem('lovedCats')}>clear</button>
      <div className='container'>
        <div className='row'>
          {data?.map((item, index) => { 
                const photos = JSON.parse(item)
                return (
                <div key={index} className="col col-xxl-3" >
                  <div className='inner'>
                    <img src={photos.url}/>
                    <div className='heart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </div>
                  </div>
              </div>)
            })}
        </div>
        </div>
    </div>
    </>
  )
}
