import { School, Book, Cpu, Zap, Beaker, Calculator, ChevronRight, RotateCcw, PenTool, Languages, BookOpen, Ruler } from 'lucide-react'

export const subjectColors: { [key: string]: string } = {
  "Physics-1": "bg-blue-100 text-blue-800",
  "Basic Electricity": "bg-yellow-100 text-yellow-800",
  "Computer Office Application": "bg-green-100 text-green-800",
  "Bangla-1": "bg-red-100 text-red-800",
  "Math-1": "bg-purple-100 text-purple-800",
  "Engineering Drawing": "bg-indigo-100 text-indigo-800",
  "English-1": "bg-pink-100 text-pink-800",
  // Add more subjects and colors here
}

export const subjectIcons: { [key: string]: React.ElementType } = {
  "Physics-1": Beaker,
  "Basic Electricity": Zap,
  "Computer Office Application": Cpu,
  "Bangla-1": BookOpen,
  "Math-1": Calculator,
  "Engineering Drawing": Ruler,
  "English-1": Languages,
  // Add more subjects and icons here
}

// Comment: Add more subject colors and icons above this line

export const roomIcons: { [key: string]: React.ElementType } = {
  "301": School,
  "239": School,
  "LAB-3": School,
  "DL-1": School,
  "341": School,
  "Lab-5": School,
  "434" : School,
  // Add more rooms and icons as needed
}

export const periodTimes: { [key: string]: string } = {
  "1st": "1:15-2:00",
  "2nd": "2:00-2:45",
  "3rd": "2:45-3:30",
  "4th": "3:30-4:15",
  "5th": "4:15-5:00",
  "6th": "5:00-5:45",
  "7th": "5:45-6:30",
}

export function getSubjectColor(subject: string): string {
  return subjectColors[subject] || "bg-gray-100 text-gray-800"
}

export function getSubjectIcon(subject: string): React.ElementType {
  return subjectIcons[subject] || Book
}

export function getRoomIcon(room: string): React.ElementType {
  return roomIcons[room] || Calculator
}

