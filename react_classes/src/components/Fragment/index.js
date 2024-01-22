import React from 'react'
import Table from './Table';

const Index = () => {
  return (
    <>
       <Table />
        {/* <React.Fragment>// 3 way
        <h1>hello world</h1>
        <p>i am Fragment</p>
        </React.Fragment> */}
        {/* <Fragment>// 2 way
            <h1>hello world</h1>
            <p>i am Fragment</p>
        </Fragment> */}

      {/* <> // 1 way
        <h1>hello world</h1>
        <p>i am Fragment</p>
      </> */}
    </>
  )
}

export default Index;
