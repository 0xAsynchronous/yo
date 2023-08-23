"use client";

import * as Dialog from "@radix-ui/react-dialog";
import SwapPage from "./SwapPage";

interface PoolCardProps {
  name: string;
  disabled?: boolean;
}

export default function PoolCard({ name, disabled }: PoolCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={`relative w-full font-sans ${disabled ? "cursor-default" : "active:opacity-70"
            }`}
        >
          <h3 className="cut-shape cut-title absolute inset-x-0 -top-6 z-10 mx-auto w-min px-4 text-4xl font-bold">
            {name}
          </h3>

          <div className="cut-shape cut-container py-6 text-start hover:bg-[#1E40AF77]">
            <div className="grid grid-cols-2">
              <div className="px-6">
                <h4 className="text-neutral-400">TVL</h4>
                <p className="text-4xl font-bold">$6.96M</p>
              </div>

              <div className="px-6">
                <h4 className="text-neutral-400">APY</h4>
                <p className="text-4xl font-bold">923%</p>
              </div>
            </div>
          </div>
        </button>
      </Dialog.Trigger>

      {!disabled && (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-xl">
            <Dialog.Content>
              <SwapPage name={name} />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}
