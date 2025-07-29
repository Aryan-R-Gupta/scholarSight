"use client";

import Link from "next/link";
import { GraduationCap, RefreshCw, LogOut } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type { Role, Student } from "@/lib/types";
import { SparklesIcon } from "../ui/icons";

interface HeaderProps {
  role: Role;
  setRole: (role: Role) => void;
  selectedStudentId: string;
  setSelectedStudentId: (id: string) => void;
  students: Student[];
}

export function Header({
  role,
  setRole,
  selectedStudentId,
  setSelectedStudentId,
  students: studentList,
}: HeaderProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold text-lg"
      >
        <SparklesIcon className="h-6 w-6 text-primary" />
        <span className="font-bold tracking-tight">ScholarSight</span>
      </Link>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex items-center gap-4">
          <Select
            value={role}
            onValueChange={(value) => setRole(value as Role)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="administrator">Administrator</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          {role === "student" && (
            <Select
              value={selectedStudentId}
              onValueChange={setSelectedStudentId}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a student" />
              </SelectTrigger>
              <SelectContent>
                {studentList.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <Button variant="outline" size="icon" onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Logout</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
