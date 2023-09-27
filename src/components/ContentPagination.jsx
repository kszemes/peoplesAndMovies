import { Box, Pagination } from '@mui/material'
import React from 'react'

export const ContentPagination = ({page,setPage,numOfPage=10}) => {
    const handleChange=(event,p)=>{
        console.log('oldal:',p);
        setPage(p);
        window.scrollTo(0,0)
    }

  return (
    <div className="content-pagination">
        <Box >
           <Pagination 
            count={numOfPage}
            size="large"
            page={page}
            color="primary"
            shape='rounded'
            onChange={handleChange}
           /> 
        </Box>
      
    </div>
  )
}

