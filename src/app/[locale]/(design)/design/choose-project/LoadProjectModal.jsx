"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoadProjectModal({ open, setOpen }) {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLoad = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/design/load-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setIsLoading(false);
        return;
      }

      const project = data.projects;
      const bathroomType = [
        "tub-to-shower",
        "curved",
        "neo-angle",
        "alcove",
      ].includes(project.shape)
        ? "showers"
        : project.shape === "tub"
        ? "bathtubs"
        : "";
      const projectUrl =
        bathroomType === "showers"
          ? `/design/${bathroomType}/configure?plumbing=${project.plumbing}&shape=${project.shape}&email=${project.email}`
          : `/design/${bathroomType}/configure?plumbing=${[
              project.plumbing,
            ]}&email=${project.email}`;

      router.push(projectUrl);
    } catch (err) {
      setError("Failed to load project");
    }

    setIsLoading(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* We remove the Trigger because we are opening it externally */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2 z-[1000]">
          <Dialog.Title className="text-lg font-bold">
            Enter your email
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-gray-600">
            We’ll load all projects associated with this email.
          </Dialog.Description>

          <form onSubmit={handleLoad} className="mt-4 flex flex-col gap-4">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 bg-accent/90 text-white rounded hover:bg-accent/100 cursor-pointer"
            >
              {isLoading ? "Loading..." : "Load Project"}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
