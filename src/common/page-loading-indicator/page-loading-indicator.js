import './index.css'
import {Box} from "@chakra-ui/react";

const PageLoadingIndicator = ()=>{

    return(
        <Box width={'100%'} height={'100vh'}>
            <div className="ring">Loading
                <span></span>
            </div>
        </Box>
    )


}

export default PageLoadingIndicator