"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/dashboard/header";
import { AdminView } from "@/components/dashboard/admin-view";
import { TeacherView } from "@/components/dashboard/teacher-view";
import { StudentView } from "@/components/dashboard/student-view";
import { students } from "@/lib/data";
import type { Role } from "@/lib/types";

export function DashboardClient({
  initialRole,
  initialStudentId,
}: {
  initialRole: Role;
  initialStudentId: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<Role>(initialRole);
  const [selectedStudentId, setSelectedStudentId] =
    useState<string>(initialStudentId);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("role", role);
    if (role === "student") {
      params.set("studentId", selectedStudentId);
    } else {
      params.delete("studentId");
    }
    router.replace(`?${params.toString()}`);
  }, [role, selectedStudentId, router, searchParams]);

  const currentStudent = students.find((s) => s.id === selectedStudentId);

  const renderView = () => {
    switch (role) {
      case "administrator":
        return <AdminView students={students} />;
      case "teacher":
        return (
           <div className="space-y-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight">
                Teacher Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Monitor your students' performance and provide support.
              </p>
            </header>
            <TeacherView students={students} />
          </div>
        );
      case "student":
        return currentStudent ? <StudentView student={currentStudent} /> : null;
      default:
        return null;
    }
  }


  return (
    <div className="flex flex-col h-full bg-background">
      <Header
        role={role}
        setRole={setRole}
        selectedStudentId={selectedStudentId}
        setSelectedStudentId={setSelectedStudentId}
        students={students}
      />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
       {renderView()}
      </main>
    </div>
  );
}
