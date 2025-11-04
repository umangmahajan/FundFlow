import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Startup Profile
        </h1>
        <p className="text-muted-foreground">
          A detailed profile helps our AI find the perfect grants for you.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>
            Tell us about your venture. The more details you provide, the
            better our recommendations will be.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startup-name">Startup Name</Label>
              <Input id="startup-name" placeholder="e.g., InnovateTech Solutions" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fintech">FinTech</SelectItem>
                  <SelectItem value="healthtech">HealthTech</SelectItem>
                  <SelectItem value="edtech">EdTech</SelectItem>
                  <SelectItem value="agritech">AgriTech</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="deeptech">Deep Tech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="stage">Company Stage</Label>
            <Select>
              <SelectTrigger id="stage">
                <SelectValue placeholder="Select a stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">Idea / Pre-seed</SelectItem>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="early-stage">Early Stage</SelectItem>
                <SelectItem value="growth">Growth Stage</SelectItem>
              </SelectContent>
            </Select>
          </div>
           <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g., Bangalore, Karnataka" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description & Needs</Label>
            <Textarea
              id="description"
              placeholder="Describe your startup's mission, product, traction, team, and what you're looking for in a grant (e.g., funding for R&D, market expansion, team hiring)."
              className="min-h-[150px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Profile</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
