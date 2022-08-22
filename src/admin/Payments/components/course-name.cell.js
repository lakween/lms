import {getAllDocFromCollection, getDocFromCollection} from "../../../common/common-action/common-action";
import {useEffect, useState} from "react";

const CourseNameCell = ({value}) => {
    const [state, setstate] = useState('')
    useEffect(() => {
        getPaymentData()
    }, [value])

    const getPaymentData = async () => {
        let result = await getDocFromCollection('courses',value)
        setstate(result?.title)
        console.log(result,'result')
    }

    return(
        <>
            {state ? state: 'data Not Found'}
        </>
    )
}

export default CourseNameCell