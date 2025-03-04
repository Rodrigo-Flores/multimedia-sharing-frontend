import { useState } from 'react';
import { toast } from 'sonner';
//
import { Input } from '@ms/components/ui/input';
import { Button } from '@ms/components/ui/button';
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ms/components/ui/dropdown-menu";
import { useTheme } from "@ms/hooks/useTheme";

const Home = () => {
  // const toast = Toaster({
  //   position: "bottom-right",
  //   duration: 5000,
  //   theme: "system",
  // });
  const [query, setQuery] = useState('');

  const handleSearch = (query: string) => {
    toast("🔍", {
      description: `You searched for: ${query}`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  };

  const { setTheme } = useTheme();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-muted-foreground mb-6">
        This is the home page of the multimedia sharing application.
      </p>
      <div className="mt-4 flex gap-2 justify-center">
        <Input
          placeholder="Search for media..."
          className="w-72"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="text-white" onClick={() => handleSearch(query)} variant="ghost">
          Search
        </Button>
      </div>
      <div className="mt-4 flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <Sun className="text-white h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {
              setTheme("light");
              toast.info("Theme set to Light");
            }}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setTheme("dark");
              toast.info("Theme set to Dark");
            }}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setTheme("system");
              toast.info("Theme set to System");
            }}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Home;