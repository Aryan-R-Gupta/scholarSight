"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { StudentView } from "./student-view";
import type { Student } from "@/lib/types";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function StudentDetailsSheet({
  student,
  onOpenChange,
}: {
  student: Student | null;
  onOpenChange: (open: boolean) => void;
}) {
  const isOpen = !!student;
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-5xl p-0">
        {student && (
          <div className="h-full flex flex-col">
             <SheetHeader className="p-4 sm:p-6 border-b flex-shrink-0">
              <div className="flex items-start justify-between">
                <div>
                  <SheetTitle className="text-2xl font-bold">{student.name}</SheetTitle>
                  <SheetDescription>
                    Comprehensive overview of academic profile and AI-driven insights.
                  </SheetDescription>
                </div>
                 <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>
            <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
              <StudentView student={student} />
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
