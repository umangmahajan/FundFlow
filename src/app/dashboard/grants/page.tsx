"use client";

import { useActionState } from "react";
import { findMatchingGrants } from "./actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Rocket, Loader, ArrowRight, ServerCrash } from "lucide-react";

const initialState = {
  schemes: [],
  message: "",
};

export default function GrantsPage() {
  const [state, formAction, isPending] = useActionState(findMatchingGrants, initialState);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          AI Grant Matching
        </h1>
        <p className="text-muted-foreground">
          Describe your startup, and our AI will find the most relevant
          government schemes for you.
        </p>
      </div>

      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Startup Profile for Matching</CardTitle>
            <CardDescription>
              Provide a summary of your startup. Include your industry, stage,
              team, product, and specific needs. The more detail, the better.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="profile">Your Startup Profile</Label>
                <Textarea
                  id="profile"
                  name="profile"
                  placeholder="e.g., We are an early-stage AgriTech startup based in Pune, developing IoT sensors for soil moisture monitoring. We have a team of 3 and a working MVP. We are seeking funds for manufacturing our first batch of 1000 sensors."
                  className="min-h-[120px]"
                  required
                  disabled={isPending}
                />
              </div>
            </div>
            {state?.message && state.message !== "success" && (
                <Alert variant="destructive" className="mt-4">
                    <ServerCrash className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Finding Grants...
                </>
              ) : (
                "Find Matching Grants"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      {state.schemes && state.schemes.length > 0 && (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold font-headline">Recommended Grants</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {state.schemes.map((scheme, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                           <div className="flex items-center gap-3">
                             <div className="bg-primary/10 p-2 rounded-lg">
                                <Rocket className="h-6 w-6 text-primary" />
                             </div>
                            <CardTitle className="text-lg leading-tight">{scheme.split(':')[0]}</CardTitle>
                           </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">{scheme.split(':').slice(1).join(':').trim()}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="secondary" className="w-full">
                                Learn More & Apply <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}