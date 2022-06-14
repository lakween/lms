import MainCard from "./components/main-card.component";
import {Center, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";
import CourseCardComponent from "./components/course-card.component";

const HomePage = ()=>{

    return (
        <MainCard
                  >
           <Wrap spacing='30px'>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>
               <WrapItem>
                   <CourseCardComponent/>
               </WrapItem>

           </Wrap>
            </MainCard>

    )
}

export default HomePage