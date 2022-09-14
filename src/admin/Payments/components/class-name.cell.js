import {getAllDocFromCollection, getDocFromCollection} from "../../../common/common-action/common-action";
import {useEffect, useState} from "react";

const ClassNameCell = ({value}) => {
    const [state, setstate] = useState('')

    useEffect(() => {
        getPaymentData()
    }, [value])

    const getPaymentData = async () => {
        let result = await getDocFromCollection('classes', value)
        setstate(result?.title)
    }

    return (
        <>
            {state ? state : 'data Not Found'}
        </>
    )
}

export default ClassNameCell