<?php

// Hardcoded routine data
$routine = [
    "Sun" => [
        "1st" => ["subject" => "Physics-1", "teacher" => "Md Sultan Mahmud", "room" => "301"],
        "2nd" => ["subject" => "Physics-1", "teacher" => "Md Sultan Mahmud", "room" => "301"],
        "3rd" => ["subject" => "Physics-1", "teacher" => "Md Sultan Mahmud", "room" => "301"],
        "4th" => ["subject" => "Basic Electricity", "teacher" => "EMT-1", "room" => "239"],
        "5th" => ["subject" => "Computer Office Application", "teacher" => "CMT-1", "room" => "LAB-3"],
        "6th" => ["subject" => "Computer Office Application", "teacher" => "CMT-1", "room" => "LAB-3"],
        "7th" => ["subject" => "Computer Office Application", "teacher" => "CMT-1", "room" => "LAB-3"],
    ],
    "Mon" => [
        "1st" => ["subject" => "Engineering Drawing", "teacher" => "CT-6", "room" => "DL-1"],
        "2nd" => ["subject" => "Engineering Drawing", "teacher" => "CT-6", "room" => "DL-1"],
        "3rd" => ["subject" => "Engineering Drawing", "teacher" => "CT-6", "room" => "DL-1"],
        "4th" => ["subject" => "Bangla-1", "teacher" => "Ruhul Amin Razib", "room" => "341"],
        "5th" => ["subject" => "Math-1", "teacher" => "MHR", "room" => "341"],
        "6th" => ["subject" => "Math-1", "teacher" => "MHR", "room" => "341"],
        "7th" => ["subject" => "Math-1", "teacher" => "MHR", "room" => "341"],
    ],
    "Tue" => [
        "1st" => ["subject" => "Bangla-1", "teacher" => "Md. Billah Hosain", "room" => "434"],
        "2nd" => ["subject" => "Basic Electricity", "teacher" => "EMT-1", "room" => "239"],
        "3rd" => ["subject" => "Basic Electricity", "teacher" => "EMT-1", "room" => "239"],
        "4th" => ["subject" => "Computer Office Application", "teacher" => "CMT-1", "room" => "LAB-5"],
        "5th" => ["subject" => "Computer Office Application", "teacher" => "CMT-1", "room" => "LAB-5"],
        "6th" => ["subject" => "Computer Office Application", "teacher" => "CMT-1", "room" => "LAB-5"],
        "7th" => ["subject" => "Physics-1", "teacher" => "Md Sultan Mahmud", "room" => "240"],
    ],
    "Wed" => [
        "1st" => ["subject" => "Math-1", "teacher" => "MHR", "room" => "434"],
        "2nd" => ["subject" => "Math-1", "teacher" => "MHR", "room" => "434"],
        "3rd" => ["subject" => "English-1", "teacher" => "Md Billal Hosain", "room" => "434"],
        "4th" => ["subject" => "Engineering Drawing", "teacher" => "CT-6", "room" => "DL-1"],
        "5th" => ["subject" => "Engineering Drawing", "teacher" => "CT-6", "room" => "DL-1"],
        "6th" => ["subject" => "Engineering Drawing", "teacher" => "CT-6", "room" => "DL-1"],
        "7th" => ["subject" => "Ghurar Time Bruh ;)", "teacher" => "Keu Nai", "room" => "Pukurer Pashe I think?"],
    ],
    "Thu" => [
        "1st" => ["subject" => "Basic Electricity-1", "teacher" => "EMT-1", "room" => "ECL"],
        "2nd" => ["subject" => "Basic Electricity-1", "teacher" => "EMT-1", "room" => "ECL"],
        "3rd" => ["subject" => "Basic Electricity-1", "teacher" => "EMT-1", "room" => "ECL"],
        "4th" => ["subject" => "Physics-1", "teacher" => "Md Sultan Mahmud", "room" => "338"],
        "5th" => ["subject" => "Physics-1", "teacher" => "Md Sultan Mahmud", "room" => "338"],
        "6th" => ["subject" => "Bangla-1", "teacher" => "Ruhul Amin Rajib", "room" => "338"],
        "7th" => ["subject" => "Math-1", "teacher" => "MHR", "room" => "338"],
    ],
];

// Get the current day
$currentDay = date("D"); // e.g., "Sun", "Mon", etc.

// Map PHP date day format to routine day names
$dayMap = [
    "Sun" => "Sun",
    "Mon" => "Mon",
    "Tue" => "Tue",
    "Wed" => "Wed",
    "Thu" => "Thu",
    "Fri" => "Fri",
    "Sat" => "Sat",
];

$data = $routine[$dayMap[$currentDay]] ?? null;
$response = [
    "success" => $data !== null,
    "message" => $data ? "Routine for $currentDay" : "No classes today!",
    "data" => $data,
];
// Return response as JSON
header('Content-Type: application/json');
echo json_encode($response);

?>
