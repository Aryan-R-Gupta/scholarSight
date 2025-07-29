"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StudentDetailsSheet } from "./student-details-sheet";
import type { Student } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";

export function TeacherView({ students }: { students: Student[] }) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Student Roster</CardTitle>
           <CardDescription>
              A list of all students currently in the system.
            </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[80px] sm:table-cell"></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Predicted Performance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/50">
                    <TableCell className="hidden sm:table-cell">
                      <Avatar className="w-10 h-10 shadow-sm">
                        <AvatarImage
                          src={student.avatar}
                          alt={student.name}
                          data-ai-hint="student photo"
                        />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                           {student.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                       <span className="font-mono text-sm">{(student.attendanceRate * 100).toFixed(0)}%</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          "font-semibold",
                          student.predictedPerformance === "Pass"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        )}
                      >
                        {student.predictedPerformance}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedStudent(student)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <StudentDetailsSheet
        student={selectedStudent}
        onOpenChange={(open) => !open && setSelectedStudent(null)}
      />
    </>
  );
}
