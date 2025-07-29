"use client";

import { useState, useTransition } from "react";
import {
  BrainCircuit,
  BookOpen,
  TrendingUp,
  FileDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { getPerformanceAnalysis, getStudyPlan } from "@/app/actions";
import type { Student } from "@/lib/types";
import type {
  InterpretStudentPerformanceOutput,
  RecommendPersonalizedStudyPlanOutput,
} from "@/ai/flows";
import { PerformanceChart } from "./performance-chart";
import { SparklesIcon } from "../ui/icons";
import { cn } from "@/lib/utils";

export function StudentView({ student }: { student: Student }) {
  const { toast } = useToast();
  const [isAnalysisPending, startAnalysisTransition] = useTransition();
  const [isPlanPending, startPlanTransition] = useTransition();
  const [analysis, setAnalysis] =
    useState<InterpretStudentPerformanceOutput | null>(null);
  const [studyPlan, setStudyPlan] =
    useState<RecommendPersonalizedStudyPlanOutput | null>(null);

  const handleGetAnalysis = () => {
    startAnalysisTransition(async () => {
      const result = await getPerformanceAnalysis(student);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      } else {
        setAnalysis(result.data!);
      }
    });
  };

  const handleGetStudyPlan = () => {
    startPlanTransition(async () => {
      const result = await getStudyPlan(student);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      } else {
        setStudyPlan(result.data!);
      }
    });
  };

  const isPassing = student.predictedPerformance === "Pass";

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6">
        <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="items-center bg-muted/20 p-6">
            <Avatar className="w-28 h-28 mb-4 border-4 border-background shadow-lg">
              <AvatarImage
                src={student.avatar}
                alt={student.name}
                data-ai-hint="student photo"
              />
              <AvatarFallback className="text-4xl bg-primary/10 text-primary font-semibold">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-bold">{student.name}</CardTitle>
             <Badge
              className={cn(
                "mt-2 text-sm font-semibold px-3 py-1",
                isPassing
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-red-100 text-red-800 border-red-200"
              )}
              variant="outline"
            >
              Predicted to {student.predictedPerformance}
            </Badge>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-muted/40">
              <h4 className="font-semibold text-sm text-muted-foreground">
                Attendance
              </h4>
              <p className="text-2xl font-bold text-primary">
                {(student.attendanceRate * 100).toFixed(0)}%
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/40">
               <h4 className="font-semibold text-sm text-muted-foreground">
                Avg. Score
              </h4>
              <p className="text-2xl font-bold text-primary">
                {Object.values(student.assessments).reduce((a,b) => a+b, 0) / Object.values(student.assessments).length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
             <CardTitle className="text-lg">Latest Assessments</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-3">
                {Object.entries(student.assessments).map(([key, value]) => (
                  <li key={key} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-semibold">{value}</span>
                  </li>
                ))}
              </ul>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Tabs defaultValue="analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">
              <SparklesIcon className="mr-2 h-4 w-4" /> AI Analysis
            </TabsTrigger>
            <TabsTrigger value="study-plan">
              <BookOpen className="mr-2 h-4 w-4" /> Study Plan
            </TabsTrigger>
            <TabsTrigger value="performance-graph">
              <TrendingUp className="mr-2 h-4 w-4" /> Performance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="analysis">
            <Card className="min-h-[400px]">
              <CardHeader>
                <CardTitle>AI-Powered Performance Analysis</CardTitle>
                <CardDescription>
                  Understand the key factors influencing this student's
                  predicted performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!analysis && !isAnalysisPending && (
                   <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-64">
                      <SparklesIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Unlock AI Insights</h3>
                      <p className="text-sm text-muted-foreground mb-4">Generate a detailed analysis of this student's academic profile.</p>
                      <Button
                        onClick={handleGetAnalysis}
                        disabled={isAnalysisPending}
                      >
                         {isAnalysisPending ? "Analyzing..." : "Get AI Analysis"}
                      </Button>
                   </div>
                )}
                {isAnalysisPending && (
                  <div className="space-y-2 pt-8">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                )}
                {analysis && (
                  <div className="text-sm text-foreground/80 whitespace-pre-wrap p-6 bg-muted/50 rounded-md border">
                    {analysis.explanation}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="study-plan">
            <Card className="min-h-[400px]">
              <CardHeader>
                <CardTitle>Personalized Study Plan</CardTitle>
                <CardDescription>
                  A custom-tailored plan to help this student succeed.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!studyPlan && !isPlanPending && (
                   <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-64">
                     <BookOpen className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Create a Custom Plan</h3>
                      <p className="text-sm text-muted-foreground mb-4">Generate a personalized study plan using AI.</p>
                      <Button
                        onClick={handleGetStudyPlan}
                        disabled={isPlanPending}
                      >
                        {isPlanPending ? "Generating..." : "Generate Study Plan"}
                      </Button>
                   </div>
                )}
                {isPlanPending && (
                  <div className="space-y-2 pt-8">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                )}
                {studyPlan && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {studyPlan.focusAreas.map((area) => (
                          <Badge variant="secondary" key={area} className="text-base px-3 py-1">
                            {area}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 italic p-3 bg-muted/40 rounded-md border">
                        {studyPlan.rationale}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">
                        Recommended Study Plan
                      </h4>
                      <div className="text-sm text-foreground/80 whitespace-pre-wrap p-6 bg-muted/50 rounded-md border">
                        {studyPlan.studyPlan}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance-graph">
            <Card className="min-h-[400px]">
              <CardHeader>
                <CardTitle>Academic Performance Over Time</CardTitle>
                <CardDescription>
                  Visualizing past and predicted academic scores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceChart data={student.performanceHistory} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
