import {getAllDocFromCollection, getDocFromCollection} from "../../../common/common-action/common-action";
import {useEffect, useState} from "react";

const StudentNameCell = ({value}) => {
    const [paymentModel, setPaymentModel] = useState('')
    useEffect(() => {
        getPaymentData()
    }, [value])

    const getPaymentData = async () => {
        let result = await getDocFromCollection('accounts',value)
        setPaymentModel(result?.fullName)
        console.log(result,'result')
    }

    return(
      <>
          {paymentModel ? paymentModel: 'data Not Found'}
      </>
  )
}

export default StudentNameCell