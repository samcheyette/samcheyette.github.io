'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileDown, ChevronDown, ChevronUp } from "lucide-react"

export default function CV() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mt-4 mb-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <CardTitle>Curriculum Vitae</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2"
          >
            {isExpanded ? (
              <>Hide CV <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>View CV <ChevronDown className="h-4 w-4" /></>
            )}
          </Button>
        </div>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <a href="./cv.pdf" download>
            <FileDown className="h-4 w-4" />
            Download CV
          </a>
        </Button>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="bg-muted rounded-lg">
            <iframe src="./cv.pdf" className="w-full h-[400px] md:h-[800px] rounded-lg" title="CV" />
          </div>
        </CardContent>
      )}
    </Card>
  );
}

