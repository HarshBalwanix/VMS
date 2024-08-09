import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Progress } from "../ui/progress";
import { Trophy } from "lucide-react";

export function LeaderBoard() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://vms-six.vercel.app/api/v1/volunteerWorks/admin/approvedVolunteerWorkWithHours"
      )
      .then((response) => {
        if (response.data.success) {
          setVolunteers(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="border rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary text-primary-foreground">
              <TableHead>Volunteer</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {volunteers.map((volunteer, index) => (
              <TableRow
                key={volunteer._id}
                className={
                  index === 0 ? "bg-yellow-100 font-bold" : "bg-primary/10"
                }
              >
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    {volunteer.avatar ? (
                      <AvatarImage src={volunteer.avatar} />
                    ) : (
                      <AvatarFallback>
                        {volunteer.fullName.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  {volunteer.fullName}
                  {index === 0 && <Trophy className="ml-2 text-yellow-500" />}
                </TableCell>
                <TableCell className="font-bold">
                  {volunteer.totalWorkedHours}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={(volunteer.totalWorkedHours / 100) * 10}
                      className="flex-1"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
