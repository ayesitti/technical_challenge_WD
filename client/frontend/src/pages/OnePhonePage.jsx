import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function OnePhonePage({phoneList}) {
const [onePhone, setOnePhone] = useState(null)

const {phoneId} = useParams()
const getOnePhone = async () => {

const phoneDetails = phoneList.find(eachPhone => eachPhone.id === Number(phoneId))
}


useEffect(() => {
getOnePhone()
}, [phoneId])


  return (
    <div>OnePhonePage</div>
  )
}

export default OnePhonePage