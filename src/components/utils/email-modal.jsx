"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Save } from "lucide-react";

export default function EmailModal({ onSave, projectEmail = "" }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState(projectEmail ?? "");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email && onSave) {
      await onSave(email);
      setOpen(false); // close modal after saving
    }
    setIsLoading(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {/* <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save Design
        </button> */}
        <Button variant="outline" className="gap-2 bg-transparent">
          <Save className="h-4 w-4" />
          <span className="hidden sm:inline">Save</span>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]" />

        <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2 z-[1000]">
          <Dialog.Title className="text-lg font-bold">
            Enter your email
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-gray-600">
            We need your email to save your design.
          </Dialog.Description>

          <form onSubmit={handleSave} className="mt-4 flex flex-col gap-4">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 bg-accent/90 text-white rounded hover:bg-accent/100 cursor-pointer"
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
