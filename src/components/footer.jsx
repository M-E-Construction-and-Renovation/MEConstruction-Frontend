"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  solutionsMenuItems,
  aboutMenuItems,
  resourcesMenuItems,
} from "@/data/navigation-data";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-full w-42 rounded bg-primary">
                <Image
                  src="/images/logo.png"
                  alt="M&E Construction and Renovation LLC Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                M&E Construction and Renovation LLC
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming bathrooms with quality, speed, and care.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <FaFacebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FaInstagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FaTwitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FaYoutube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                {solutionsMenuItems.map((item) => {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {aboutMenuItems.map((item) => {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {resourcesMenuItems.map((item) => {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get renovation tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 M&E Construction and Renovation LLC. All rights reserved. |
            <Link href="/privacy-policy" target="_blank" className="underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="underline"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
