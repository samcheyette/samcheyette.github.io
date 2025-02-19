'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileDown } from "lucide-react"

export default function CV() {
  return (
    <section id="cv" className="mb-16 max-w-5xl mx-auto bg-white text-black p-8 rounded-lg">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Curriculum Vitae</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download CV
          </Button>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg">
            <iframe src="/cv.pdf" className="w-full h-[800px] rounded-lg" title="CV" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

