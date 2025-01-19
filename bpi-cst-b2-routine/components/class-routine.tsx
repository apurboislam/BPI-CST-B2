'use client'

import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { getSubjectColor, getSubjectIcon, getRoomIcon, periodTimes } from '@/utils/routineUtils'
import { ChevronRight, RotateCcw } from 'lucide-react'

interface ClassData {
  subject: string
  teacher: string
  room: string
}

interface RoutineData {
  [key: string]: ClassData
}

interface ApiResponse {
  success: boolean
  message: string
  data: RoutineData
}

const periods = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"]

export default function ClassRoutine() {
  const [routineData, setRoutineData] = useState<RoutineData | null>(null)
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [currentDay, setCurrentDay] = useState<string>('today')

  const fetchRoutine = async (day: string) => {
    setLoading(true)
    try {
      const response = await fetch(`https://api.apstech.com.bd/v1/bpi/get_routine.php?day=${day}`)
      const data: ApiResponse = await response.json()

      if (data.success) {
        setRoutineData(data.data)
        setMessage(data.message)
      } else {
        setRoutineData(null)
        setMessage('Bell\'s E Jauwar Din xD')
      }
    } catch (err) {
      setError('Failed to fetch routine data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRoutine('today')
  }, [])

  const getRowSpan = (period: string, data: ClassData) => {
    let span = 1
    let nextPeriod = periods[periods.indexOf(period) + 1]
    while (nextPeriod && routineData && routineData[nextPeriod] && 
           routineData[nextPeriod].subject === data.subject &&
           routineData[nextPeriod].teacher === data.teacher &&
           routineData[nextPeriod].room === data.room) {
      span++
      nextPeriod = periods[periods.indexOf(nextPeriod) + 1]
    }
    return span
  }

  const shouldRenderCell = (period: string, data: ClassData) => {
    const prevPeriod = periods[periods.indexOf(period) - 1]
    return !prevPeriod || !routineData || !routineData[prevPeriod] ||
           routineData[prevPeriod].subject !== data.subject ||
           routineData[prevPeriod].teacher !== data.teacher ||
           routineData[prevPeriod].room !== data.room
  }

  const handleNextDay = () => {
    setCurrentDay('next')
    fetchRoutine('next')
  }

  const handleBackToToday = () => {
    setCurrentDay('today')
    fetchRoutine('today')
  }

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{message === "Bell\'s E Jauwar Din xD" ? "LoL" : message}</h2>
      {routineData ? (
        <div className="relative overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-32 font-bold text-gray-900">Period</TableHead>
                <TableHead className="font-bold text-gray-900">Subject</TableHead>
                <TableHead className="font-bold text-gray-900">Teacher</TableHead>
                <TableHead className="font-bold text-gray-900">Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {periods.map((period, index) => (
                <TableRow key={period} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <TableCell className="font-medium text-gray-900">
                    {period}
                    <br />
                    <span className="text-xs text-gray-500">{periodTimes[period]}</span>
                  </TableCell>
                  {routineData[period] && shouldRenderCell(period, routineData[period]) ? (
                    <>
                      <TableCell 
                        rowSpan={getRowSpan(period, routineData[period])}
                        className={`border-l border-gray-200 ${getSubjectColor(routineData[period].subject)}`}
                      >
                        <div className="flex items-center space-x-2">
                          {React.createElement(getSubjectIcon(routineData[period].subject), { size: 20 })}
                          <span>{routineData[period].subject}</span>
                        </div>
                      </TableCell>
                      <TableCell 
                        rowSpan={getRowSpan(period, routineData[period])}
                        className="border-l border-gray-200"
                      >
                        {routineData[period].teacher}
                      </TableCell>
                      <TableCell 
                        rowSpan={getRowSpan(period, routineData[period])}
                        className="border-l border-gray-200"
                      >
                        <div className="flex items-center space-x-2">
                          {React.createElement(getRoomIcon(routineData[period].room), { size: 20 })}
                          <span>{routineData[period].room}</span>
                        </div>
                      </TableCell>
                    </>
                  ) : null}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {currentDay === 'next' && (
              <Button
                onClick={handleBackToToday}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Back to Today
              </Button>
            )}
            {currentDay === 'today' && (
              <Button
                onClick={handleNextDay}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-10 text-xl font-semibold text-gray-700">{message}</div>
      )}
    </div>
  )
}

