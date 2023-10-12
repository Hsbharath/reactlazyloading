import { React } from 'react';

const SearchList = (data) => {

    console.log(data.data.length);

  return (
    <>
        <h1>Testing</h1>
        {
            data.data.length && data.data.forEach((ele, key) => {
                <div key={key} className='w-full grid grid-cols-5'>
                    <div className='col-span-1'>
                        <img src={ele.url} alt={ele.title}/>
                    </div>
                </div>
            })
        }
    </>
  )
}

export default SearchList;