import React, { useState } from "react";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAnimationPreview } from "@/lib/animation-preview";

export const ComponentDemo = ({ componentName }: { componentName: string }) => {
  const [key, setKey] = useState(0);

  return (
    <div className="relative border rounded-lg h-72 overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-200/60 dark:from-gray-700/60 dark:to-gray-900/60 backdrop-blur-sm"></div>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-2 z-20"
        onClick={() => setKey((prevKey) => prevKey + 1)}
      >
        <RotateCw className="h-4 w-4" />
      </Button>
      <div className="relative z-10 flex items-center justify-center h-full">
        {getAnimationPreview(componentName, key)}
      </div>
    </div>
  );
};
