import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import AddAppointment from '../../components/admin/AddAppointment'
import Layout from '../../components/admin/Layout'
// import UpdateDeleteAppointment from '../../components/admin/UpdateDeleteAppointment'
import AppointmentSlot from '../../components/Appointment/AppointmentSlot'
import Calendar from '../../components/Calendar'
import { getAvailableAppointment } from '../../features/appointmentSlice'

const AddAppointment = React.lazy(() => import('../../components/admin/AddAppointment'))
const UpdateDeleteAppointment = React.lazy(() => import('../../components/admin/UpdateDeleteAppointment'))


function Schedules() {

  const dispatch = useDispatch()
  const appointments = useSelector(state => state.appointment.availableAppointment) || { results: [] }
  const [date,setDate] = useState(new Date())
  const [activeAppointment,setActiveAppointment] = useState(null)
  const [isOpen,setIsOpen] = useState(false)
  const [upAndDel,setUpAndDel] = useState(false)

  useEffect(() => {
    dispatch(getAvailableAppointment(date))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const focusAppointment = (id) => {
    setActiveAppointment(id)
    setUpAndDel(true)
  }

  const closeUpAndDel = () => {
    setUpAndDel(false)
  }

  const handleDateChange = (date) => {
    setDate(date)
    console.log('running')
    dispatch(getAvailableAppointment(date))
  }
  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Layout title='Schedules'>
        <Flex mt='8rem' h='fit-content'>
            <Flex align={'center'} justify='center'>
              <Calendar date={date} handleChange={handleDateChange} />
            </Flex>
            <Flex
              direction='column'
              w='70%'
              ml='2rem'
            >
              <Flex
                mb='1.5rem'
                w='100%'
                justify='space-between'
                align='center'
              >
                <Heading as='h1' fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }}>Appointment on - {date.toLocaleDateString()}</Heading>
                <Button variant='secondary-btn' onClick={() => setIsOpen(true)}>Add Appointment</Button>
              </Flex>
              <Flex mt='2rem' direction={'column'}>
                {
                    appointments.results && ( appointments.results.length === 0 ? 
                    <Heading as='h1' fontSize={{ base: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1rem' }} color='#959191'>
                        No appointments slots added yet...
                    </Heading> : appointments.results.map((appointment) => <AppointmentSlot appointment={appointment} handleClick={focusAppointment} active={activeAppointment} key={appointment._id}/>)
                    )
                }
              </Flex>
            </Flex>
            { isOpen ? 
              <Suspense fallback={<div>Loading...</div>}>
                <AddAppointment handleCancel={handleCancel}/>
              </Suspense>
            : '' }
            { upAndDel ? 
              <Suspense fallback={<div>Loading...</div>}>
                <UpdateDeleteAppointment id={activeAppointment} closeUpAndDel={closeUpAndDel} />
              </Suspense>
            : '' }
        </Flex>
    </Layout>
  )
}

export default Schedules