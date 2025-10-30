"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import QuoteForm from "./quote-form";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@/store/quoteModalSlice";

export default function QuoteModal() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    <Dialog.Root open={isOpen} onOpenChange={() => dispatch(closeModal())}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-51 w-full max-w-2xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-background shadow-lg">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-6 gap-2">
              <div>
                <Dialog.Title className="text-3xl font-bold">
                  Connect with us!
                </Dialog.Title>
                <Dialog.Description className="text-muted-foreground mt-2">
                  Fill out the form below and our team will contact you shortly.
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>

            <QuoteForm onSuccess={() => dispatch(closeModal())} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
