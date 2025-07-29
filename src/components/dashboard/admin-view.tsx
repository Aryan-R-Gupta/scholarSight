"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Download,
  Users,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { TeacherView } from "./teacher-view";
import type { Student } from "@/lib/types";
import { SparklesIcon } from "../ui/icons";

export function AdminView({ students }: { students: Student[] }) {
  const totalStudents = students.length;
  const passingStudents = students.filter(
    (s) => s.predictedPerformance === "Pass"
  ).length;
  const failingStudents = totalStudents - passingStudents;
  const passRate =
    totalStudents > 0 ? (passingStudents / totalStudents) * 100 : 0;

  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Administrator Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Institution-wide student performance overview.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalStudents}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently enrolled
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Predicted to Pass
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{passingStudents}</div>
            <p className="text-xs text-muted-foreground mt-1">
              On track for success
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At-Risk Students</CardTitle>
            <TrendingDown className="h-5 w-5 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{failingStudents}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Need intervention
            </p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Pass Rate
            </CardTitle>
            <SparklesIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{passRate.toFixed(1)}%</div>
            <Progress value={passRate} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
            <CardDescription>
              View and manage all students in the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4">
               <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
            </div>
            <TeacherView students={students} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
