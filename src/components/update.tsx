import React from 'react'

const Update = () => {
  
  const update_list = [
    {date: '2020年9月11日', content: 'Blogを新しくリニューアルしました！'}
  ]
  
  return(
    <div className="border-2 border-indigo-200 rounded-lg">
      <div className="p-4">
        {update_list.map( (item, index) => {
          return(
            <div key={index}>
              <p className="text-sm">{item.date}</p>
              <div>
                <p>{item.content}</p>
              </div>
            </div>
          )
          })}
      </div>
    </div>
  )
}

export default Update